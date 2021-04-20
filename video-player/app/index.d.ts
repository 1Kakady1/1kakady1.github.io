interface IUi {
    [key: string]: HTMLElement | null;
}
declare global {
    interface Document {
        mozCancelFullScreen?: () => Promise<void>;
        msExitFullscreen?: () => Promise<void>;
        webkitExitFullscreen?: () => Promise<void>;
        mozFullScreenElement?: Element;
        msFullscreenElement?: Element;
        webkitFullscreenElement?: Element;
        pictureInPictureEnabled?: any;
    }
    interface HTMLDivElement {
        mozRequestFullScreen(): Promise<void>;
        webkitRequestFullscreen(): Promise<void>;
        mozRequestFullScreen(): Promise<void>;
        msRequestFullscreen(): Promise<void>;
    }
}
export declare enum UiClasses {
    play = "videoPlay",
    stop = "videoStop",
    pause = "videoPause",
    start = "videoStart",
    fullscreen = "videoFullscreen",
    fullscreenCancel = "videoFullscreenCancel",
    buffer = "playerBufferedAmount",
    progress = "playerProgressAmount",
    track = "playerTrack",
    volume = "videoVolume",
    rangeVolume = "videoVolumeRange",
    labelValue = "palyer-volume-label",
    volumeProgressContainer = "palyerVolumeContainer",
    videoPlayerControls = "videoPlayerControls",
    videoContainerOverlay = "overlayVideoContainer",
    videoOverlayBtn = "overlayVideoBtn",
    trackTime = "palyertrackTime",
    trackTimeFull = "palyertrackTimeFull"
}
interface IFade {
    el: HTMLElement;
    display?: string;
    time?: number;
    callback?: () => void;
}
export declare class VideoPlayer {
    private video;
    private videoContainer;
    private controlsUI;
    private isPlay;
    private isFullScreen;
    private isVolume;
    private navigator;
    private volumeValue;
    private iconsFolder;
    private mX;
    private mY;
    constructor(videoContainer: string, iconsFolder: string, volumeValue?: number);
    get videoElement(): HTMLVideoElement;
    get controls(): IUi;
    get isVideoPlay(): boolean;
    get isVideoFullScreen(): boolean;
    unMount: () => void;
    checkSelectors: () => boolean;
    private secondsToHms;
    private _onMouse;
    private _onClickControls;
    private _onChangePip;
    private _onChangeFullScreen;
    private _onChangeProgessVideo;
    private _onChangeVolume;
    playerInit: () => void;
    fadeIn({ el, display, time, callback }: IFade): void;
    fadeOut({ el, time, callback }: IFade): void;
    private fadeOutIN;
}
export {};
