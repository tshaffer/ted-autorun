import * as React from 'react';
import { Dispatch } from 'redux';
import { bindActionCreators } from 'redux';

import isomorphicPath from 'isomorphic-path';

import { connect } from 'react-redux';
import { getAssetPath } from '../selector';
import { autorunStateFromState } from '../type';
import { postVideoEnd } from '../controller';
import { setVideoElementRef } from '../model/playback';

// -----------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------

export interface VideoPropsFromParent {
  assetName: string;
  zoneWidth: number;
  zoneHeight: number;
}

export interface VideoProps extends VideoPropsFromParent {
  filePath: string;
  onVideoEnd: () => any;
  onSetVideoElementRef: (videoElementRef: any) => any;
}

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

// TEDTODO - VideoProps didn't work, so put in any
export class VideoComponent extends React.Component<any> {

  videoElementRef: HTMLVideoElement | null;

  handleSetVideoElementRef(videoElementRef: HTMLVideoElement | null) {
    this.videoElementRef = videoElementRef;
    this.props.onSetVideoElementRef(videoElementRef);
  }

  render() {

    const src: string = isomorphicPath.join('file://', this.props.filePath);

    const self = this;

    return (
      <video
        src={src}
        width={this.props.zoneWidth.toString()}
        height={this.props.zoneHeight.toString()}
        autoPlay={true}
        ref={(videoElementRef) => {
          // console.log('videoElementRef retrieved');
          self.handleSetVideoElementRef(videoElementRef);
        }}
        onEnded={() => {
          // console.log('**** - videoEnd');
          self.props.onVideoEnd();
        }}
      />
    );
  }
}

// -----------------------------------------------------------------------
// Container
// -----------------------------------------------------------------------

// TEDTODO - real return value didn't work, so put in any
const mapStateToProps = (state: any, ownProps: VideoPropsFromParent): any => {
  state = autorunStateFromState(state);
  return {
    filePath: getAssetPath(state, ownProps.assetName),
    width: ownProps.zoneWidth,
    height: ownProps.zoneHeight,
    assetName: ownProps.assetName,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): any => {
  return bindActionCreators({
    onVideoEnd: postVideoEnd,
    onSetVideoElementRef: setVideoElementRef,
  }, dispatch);
};

export const Video = connect(mapStateToProps, mapDispatchToProps)(VideoComponent);
