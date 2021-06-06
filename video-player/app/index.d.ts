declare type status = 'remove' | 'insert';
export interface IElementsReturn {
    status: status;
    class: string;
    ui: string[];
}
interface IUi {
    [key: string]: HTMLElement | null;
}
interface IVideoPlayerElementsCreate {
    [key: string]: IElementsReturn;
}
interface IVideoPlayerUI {
    unMount: () => void;
    controls: (container: HTMLDivElement | null, isUnmount?: boolean) => IElementsReturn;
    createUI: () => IVideoPlayerElementsCreate;
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
    labelValue = "player-volume-label",
    volumeProgressContainer = "playerVolumeContainer",
    videoPlayerControls = "videoPlayerControls",
    videoContainerOverlay = "overlayVideoContainer",
    videoOverlayBtn = "overlayVideoBtn",
    trackTime = "palyertrackTime",
    trackTimeFull = "palyertrackTimeFull",
    subtitleBtn = "playerSubtitleBtn",
    subtitleItem = "playerSubtitleItem",
    subtitleList = "palyersubtitleList",
    video = "playerVideo",
    doubleTap = "doubleTap",
    doubleTapLeft = "doubleTapLeft",
    doubleTapRight = "doubleTapRight"
}
interface IFade {
    el: HTMLElement;
    display?: string;
    time?: number;
    callback?: () => void;
}
interface IVolumeClasses {
    btn: string;
    volume: string;
    range: string;
}
export interface IVideoPlayerUIParam {
    volumeValue: number;
    icons: string;
    subtitles?: NodeListOf<HTMLTrackElement> | null;
    subtitlesInit?: boolean | undefined;
    timeTrackOffset?: number | undefined;
}
export declare class VideoPlayerUI implements IVideoPlayerUI {
    protected container: HTMLDivElement | null;
    protected volumeValue: number;
    protected subtitlesList: NodeListOf<HTMLTrackElement> | null;
    protected icons: string;
    protected subtitlesInit?: boolean | undefined;
    protected timeTrackOffset?: number | undefined;
    constructor(videoContainer: HTMLDivElement | null, param: IVideoPlayerUIParam);
    unMount: () => void;
    protected subtitles({ btn, cItem, listTrack, track, }: {
        btn: string;
        cItem: string;
        listTrack: string;
        track: NodeListOf<HTMLTrackElement> | null;
    }): string;
    protected volume({ btn, volume, range }: IVolumeClasses): string;
    protected fullscreen: (on: string, off: string) => string;
    protected play(play: string, pause: string): string;
    protected track(container: string, progress: string, buffer: string, time: string, timeFull: string): string;
    protected doubleTap(isUnmount?: boolean): IElementsReturn;
    protected overlayPlay(isUnmount?: boolean): IElementsReturn;
    controls(container: HTMLDivElement | null, isUnmount?: boolean): IElementsReturn;
    createUI: () => IVideoPlayerElementsCreate;
}
export interface IVideoPlayer {
    videoContainer: string;
    iconsFolder: string;
    subtitle?: boolean;
    volumeValue?: number;
    timeTrackOffset?: number;
    videoPlayerUI?: (videoContainer: HTMLDivElement | null, param: IVideoPlayerUIParam) => IVideoPlayerUI;
}
export declare enum IVideoPlayerDefaultConst {
    volume = 100,
    timeTrackOffset = 3
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
    private subtitles;
    private subtitlesIndex;
    private isSubtitles;
    private isTrack;
    private ui?;
    private timeTrackOffset;
    private mX;
    private mY;
    private isMouseHover;
    private unMountObject;
    private tapedTwice;
    constructor({ videoContainer, iconsFolder, volumeValue, subtitle, timeTrackOffset: timeTrackOffset, videoPlayerUI }: IVideoPlayer);
    get videoElement(): HTMLVideoElement | null;
    get controls(): IUi;
    get isVideoPlay(): boolean;
    unMount: () => void;
    checkError: () => boolean;
    private _onTouch;
    private _onMouse;
    private _onClickControls;
    private _onChangePip;
    private _onChangeFullScreen;
    private _onChangeProgressVideo;
    private _onEventKeywords;
    private _onChangeVolume;
    playerInit: () => void;
    fadeIn({ el, display, time, callback }: IFade): void;
    fadeOut({ el, time, callback }: IFade): void;
    userAgent: () => {
        browser: string;
        class: string;
    };
    private secondsToHms;
    private fadeOutIN;
}
export {};
