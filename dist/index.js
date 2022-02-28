'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomOut = exports.ZoomIn = exports.Zap = exports.ZapOff = exports.Youtube = exports.X = exports.XSquare = exports.XOctagon = exports.XCircle = exports.Wind = exports.Wifi = exports.WifiOff = exports.Watch = exports.Volume = exports.VolumeX = exports.Volume2 = exports.Volume1 = exports.Voicemail = exports.Video = exports.VideoOff = exports.Users = exports.User = exports.UserX = exports.UserPlus = exports.UserMinus = exports.UserCheck = exports.Upload = exports.UploadCloud = exports.Unlock = exports.Underline = exports.Umbrella = exports.Type = exports.Twitter = exports.Twitch = exports.Tv = exports.Truck = exports.Triangle = exports.TrendingUp = exports.TrendingDown = exports.Trello = exports.Trash = exports.Trash2 = exports.Tool = exports.ToggleRight = exports.ToggleLeft = exports.ThumbsUp = exports.ThumbsDown = exports.Thermometer = exports.Terminal = exports.Target = exports.Tag = exports.Tablet = exports.Sunset = exports.Sunrise = exports.Sun = exports.StopCircle = exports.Star = exports.Square = exports.Speaker = exports.Smile = exports.Smartphone = exports.Sliders = exports.Slash = exports.Slack = exports.SkipForward = exports.SkipBack = exports.Sidebar = exports.Shuffle = exports.ShoppingCart = exports.ShoppingBag = exports.Shield = exports.ShieldOff = exports.Share = exports.Share2 = exports.Settings = exports.Server = exports.Send = exports.Search = exports.Scissors = exports.Save = exports.Rss = exports.RotateCw = exports.RotateCcw = exports.Rewind = exports.Repeat = exports.RefreshCw = undefined;
exports.RefreshCcw = exports.Radio = exports.Printer = exports.Power = exports.Pocket = exports.Plus = exports.PlusSquare = exports.PlusCircle = exports.Play = exports.PlayCircle = exports.PieChart = exports.Phone = exports.PhoneOutgoing = exports.PhoneOff = exports.PhoneMissed = exports.PhoneIncoming = exports.PhoneForwarded = exports.PhoneCall = exports.Percent = exports.PenTool = exports.Pause = exports.PauseCircle = exports.Paperclip = exports.Package = exports.Octagon = exports.Navigation = exports.Navigation2 = exports.Music = exports.Move = exports.MousePointer = exports.MoreVertical = exports.MoreHorizontal = exports.Moon = exports.Monitor = exports.Minus = exports.MinusSquare = exports.MinusCircle = exports.Minimize = exports.Minimize2 = exports.Mic = exports.MicOff = exports.MessageSquare = exports.MessageCircle = exports.Menu = exports.Meh = exports.Maximize = exports.Maximize2 = exports.Map = exports.MapPin = exports.Mail = exports.LogOut = exports.LogIn = exports.Lock = exports.Loader = exports.List = exports.Linkedin = exports.Link = exports.Link2 = exports.LifeBuoy = exports.Layout = exports.Layers = exports.Key = exports.Italic = exports.Instagram = exports.Info = exports.Inbox = exports.Image = exports.Home = exports.Hexagon = exports.HelpCircle = exports.Heart = exports.Headphones = exports.Hash = exports.HardDrive = exports.Grid = exports.Globe = exports.Gitlab = exports.Github = exports.GitPullRequest = exports.GitMerge = exports.GitCommit = exports.GitBranch = exports.Gift = exports.Frown = exports.Framer = exports.Folder = exports.FolderPlus = exports.FolderMinus = exports.Flag = exports.Filter = exports.Film = exports.File = exports.FileText = exports.FilePlus = exports.FileMinus = exports.Figma = exports.Feather = exports.FastForward = exports.Facebook = exports.Eye = undefined;
exports.EyeOff = exports.ExternalLink = exports.Edit = exports.Edit3 = exports.Edit2 = exports.Droplet = exports.Dribbble = exports.Download = exports.DownloadCloud = exports.DollarSign = exports.Divide = exports.DivideSquare = exports.DivideCircle = exports.Disc = exports.Delete = exports.Database = exports.Crosshair = exports.Crop = exports.CreditCard = exports.Cpu = exports.CornerUpRight = exports.CornerUpLeft = exports.CornerRightUp = exports.CornerRightDown = exports.CornerLeftUp = exports.CornerLeftDown = exports.CornerDownRight = exports.CornerDownLeft = exports.Copy = exports.Compass = exports.Command = exports.Columns = exports.Coffee = exports.Codesandbox = exports.Codepen = exports.Code = exports.Cloud = exports.CloudSnow = exports.CloudRain = exports.CloudOff = exports.CloudLightning = exports.CloudDrizzle = exports.Clock = exports.Clipboard = exports.Circle = exports.Chrome = exports.ChevronsUp = exports.ChevronsRight = exports.ChevronsLeft = exports.ChevronsDown = exports.ChevronUp = exports.ChevronRight = exports.ChevronLeft = exports.ChevronDown = exports.Check = exports.CheckSquare = exports.CheckCircle = exports.Cast = exports.Camera = exports.CameraOff = exports.Calendar = exports.Briefcase = exports.Box = exports.Bookmark = exports.Book = exports.BookOpen = exports.Bold = exports.Bluetooth = exports.Bell = exports.BellOff = exports.Battery = exports.BatteryCharging = exports.BarChart = exports.BarChart2 = exports.Award = exports.AtSign = exports.ArrowUp = exports.ArrowUpRight = exports.ArrowUpLeft = exports.ArrowUpCircle = exports.ArrowRight = exports.ArrowRightCircle = exports.ArrowLeft = exports.ArrowLeftCircle = exports.ArrowDown = exports.ArrowDownRight = exports.ArrowDownLeft = exports.ArrowDownCircle = exports.Archive = exports.Aperture = exports.Anchor = exports.AlignRight = exports.AlignLeft = exports.AlignJustify = exports.AlignCenter = exports.AlertTriangle = exports.AlertOctagon = exports.AlertCircle = exports.Airplay = exports.Activity = undefined;

var _activity = require('./lib/activity');

var _activity2 = _interopRequireDefault(_activity);

var _airplay = require('./lib/airplay');

var _airplay2 = _interopRequireDefault(_airplay);

var _alertCircle = require('./lib/alert-circle');

var _alertCircle2 = _interopRequireDefault(_alertCircle);

var _alertOctagon = require('./lib/alert-octagon');

var _alertOctagon2 = _interopRequireDefault(_alertOctagon);

var _alertTriangle = require('./lib/alert-triangle');

var _alertTriangle2 = _interopRequireDefault(_alertTriangle);

var _alignCenter = require('./lib/align-center');

var _alignCenter2 = _interopRequireDefault(_alignCenter);

var _alignJustify = require('./lib/align-justify');

var _alignJustify2 = _interopRequireDefault(_alignJustify);

var _alignLeft = require('./lib/align-left');

var _alignLeft2 = _interopRequireDefault(_alignLeft);

var _alignRight = require('./lib/align-right');

var _alignRight2 = _interopRequireDefault(_alignRight);

var _anchor = require('./lib/anchor');

var _anchor2 = _interopRequireDefault(_anchor);

var _aperture = require('./lib/aperture');

var _aperture2 = _interopRequireDefault(_aperture);

var _archive = require('./lib/archive');

var _archive2 = _interopRequireDefault(_archive);

var _arrowDownCircle = require('./lib/arrow-down-circle');

var _arrowDownCircle2 = _interopRequireDefault(_arrowDownCircle);

var _arrowDownLeft = require('./lib/arrow-down-left');

var _arrowDownLeft2 = _interopRequireDefault(_arrowDownLeft);

var _arrowDownRight = require('./lib/arrow-down-right');

var _arrowDownRight2 = _interopRequireDefault(_arrowDownRight);

var _arrowDown = require('./lib/arrow-down');

var _arrowDown2 = _interopRequireDefault(_arrowDown);

var _arrowLeftCircle = require('./lib/arrow-left-circle');

var _arrowLeftCircle2 = _interopRequireDefault(_arrowLeftCircle);

var _arrowLeft = require('./lib/arrow-left');

var _arrowLeft2 = _interopRequireDefault(_arrowLeft);

var _arrowRightCircle = require('./lib/arrow-right-circle');

var _arrowRightCircle2 = _interopRequireDefault(_arrowRightCircle);

var _arrowRight = require('./lib/arrow-right');

var _arrowRight2 = _interopRequireDefault(_arrowRight);

var _arrowUpCircle = require('./lib/arrow-up-circle');

var _arrowUpCircle2 = _interopRequireDefault(_arrowUpCircle);

var _arrowUpLeft = require('./lib/arrow-up-left');

var _arrowUpLeft2 = _interopRequireDefault(_arrowUpLeft);

var _arrowUpRight = require('./lib/arrow-up-right');

var _arrowUpRight2 = _interopRequireDefault(_arrowUpRight);

var _arrowUp = require('./lib/arrow-up');

var _arrowUp2 = _interopRequireDefault(_arrowUp);

var _atSign = require('./lib/at-sign');

var _atSign2 = _interopRequireDefault(_atSign);

var _award = require('./lib/award');

var _award2 = _interopRequireDefault(_award);

var _barChart = require('./lib/bar-chart-2');

var _barChart2 = _interopRequireDefault(_barChart);

var _barChart3 = require('./lib/bar-chart');

var _barChart4 = _interopRequireDefault(_barChart3);

var _batteryCharging = require('./lib/battery-charging');

var _batteryCharging2 = _interopRequireDefault(_batteryCharging);

var _battery = require('./lib/battery');

var _battery2 = _interopRequireDefault(_battery);

var _bellOff = require('./lib/bell-off');

var _bellOff2 = _interopRequireDefault(_bellOff);

var _bell = require('./lib/bell');

var _bell2 = _interopRequireDefault(_bell);

var _bluetooth = require('./lib/bluetooth');

var _bluetooth2 = _interopRequireDefault(_bluetooth);

var _bold = require('./lib/bold');

var _bold2 = _interopRequireDefault(_bold);

var _bookOpen = require('./lib/book-open');

var _bookOpen2 = _interopRequireDefault(_bookOpen);

var _book = require('./lib/book');

var _book2 = _interopRequireDefault(_book);

var _bookmark = require('./lib/bookmark');

var _bookmark2 = _interopRequireDefault(_bookmark);

var _box = require('./lib/box');

var _box2 = _interopRequireDefault(_box);

var _briefcase = require('./lib/briefcase');

var _briefcase2 = _interopRequireDefault(_briefcase);

var _calendar = require('./lib/calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _cameraOff = require('./lib/camera-off');

var _cameraOff2 = _interopRequireDefault(_cameraOff);

var _camera = require('./lib/camera');

var _camera2 = _interopRequireDefault(_camera);

var _cast = require('./lib/cast');

var _cast2 = _interopRequireDefault(_cast);

var _checkCircle = require('./lib/check-circle');

var _checkCircle2 = _interopRequireDefault(_checkCircle);

var _checkSquare = require('./lib/check-square');

var _checkSquare2 = _interopRequireDefault(_checkSquare);

var _check = require('./lib/check');

var _check2 = _interopRequireDefault(_check);

var _chevronDown = require('./lib/chevron-down');

var _chevronDown2 = _interopRequireDefault(_chevronDown);

var _chevronLeft = require('./lib/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('./lib/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _chevronUp = require('./lib/chevron-up');

var _chevronUp2 = _interopRequireDefault(_chevronUp);

var _chevronsDown = require('./lib/chevrons-down');

var _chevronsDown2 = _interopRequireDefault(_chevronsDown);

var _chevronsLeft = require('./lib/chevrons-left');

var _chevronsLeft2 = _interopRequireDefault(_chevronsLeft);

var _chevronsRight = require('./lib/chevrons-right');

var _chevronsRight2 = _interopRequireDefault(_chevronsRight);

var _chevronsUp = require('./lib/chevrons-up');

var _chevronsUp2 = _interopRequireDefault(_chevronsUp);

var _chrome = require('./lib/chrome');

var _chrome2 = _interopRequireDefault(_chrome);

var _circle = require('./lib/circle');

var _circle2 = _interopRequireDefault(_circle);

var _clipboard = require('./lib/clipboard');

var _clipboard2 = _interopRequireDefault(_clipboard);

var _clock = require('./lib/clock');

var _clock2 = _interopRequireDefault(_clock);

var _cloudDrizzle = require('./lib/cloud-drizzle');

var _cloudDrizzle2 = _interopRequireDefault(_cloudDrizzle);

var _cloudLightning = require('./lib/cloud-lightning');

var _cloudLightning2 = _interopRequireDefault(_cloudLightning);

var _cloudOff = require('./lib/cloud-off');

var _cloudOff2 = _interopRequireDefault(_cloudOff);

var _cloudRain = require('./lib/cloud-rain');

var _cloudRain2 = _interopRequireDefault(_cloudRain);

var _cloudSnow = require('./lib/cloud-snow');

var _cloudSnow2 = _interopRequireDefault(_cloudSnow);

var _cloud = require('./lib/cloud');

var _cloud2 = _interopRequireDefault(_cloud);

var _code = require('./lib/code');

var _code2 = _interopRequireDefault(_code);

var _codepen = require('./lib/codepen');

var _codepen2 = _interopRequireDefault(_codepen);

var _codesandbox = require('./lib/codesandbox');

var _codesandbox2 = _interopRequireDefault(_codesandbox);

var _coffee = require('./lib/coffee');

var _coffee2 = _interopRequireDefault(_coffee);

var _columns = require('./lib/columns');

var _columns2 = _interopRequireDefault(_columns);

var _command = require('./lib/command');

var _command2 = _interopRequireDefault(_command);

var _compass = require('./lib/compass');

var _compass2 = _interopRequireDefault(_compass);

var _copy = require('./lib/copy');

var _copy2 = _interopRequireDefault(_copy);

var _cornerDownLeft = require('./lib/corner-down-left');

var _cornerDownLeft2 = _interopRequireDefault(_cornerDownLeft);

var _cornerDownRight = require('./lib/corner-down-right');

var _cornerDownRight2 = _interopRequireDefault(_cornerDownRight);

var _cornerLeftDown = require('./lib/corner-left-down');

var _cornerLeftDown2 = _interopRequireDefault(_cornerLeftDown);

var _cornerLeftUp = require('./lib/corner-left-up');

var _cornerLeftUp2 = _interopRequireDefault(_cornerLeftUp);

var _cornerRightDown = require('./lib/corner-right-down');

var _cornerRightDown2 = _interopRequireDefault(_cornerRightDown);

var _cornerRightUp = require('./lib/corner-right-up');

var _cornerRightUp2 = _interopRequireDefault(_cornerRightUp);

var _cornerUpLeft = require('./lib/corner-up-left');

var _cornerUpLeft2 = _interopRequireDefault(_cornerUpLeft);

var _cornerUpRight = require('./lib/corner-up-right');

var _cornerUpRight2 = _interopRequireDefault(_cornerUpRight);

var _cpu = require('./lib/cpu');

var _cpu2 = _interopRequireDefault(_cpu);

var _creditCard = require('./lib/credit-card');

var _creditCard2 = _interopRequireDefault(_creditCard);

var _crop = require('./lib/crop');

var _crop2 = _interopRequireDefault(_crop);

var _crosshair = require('./lib/crosshair');

var _crosshair2 = _interopRequireDefault(_crosshair);

var _database = require('./lib/database');

var _database2 = _interopRequireDefault(_database);

var _delete = require('./lib/delete');

var _delete2 = _interopRequireDefault(_delete);

var _disc = require('./lib/disc');

var _disc2 = _interopRequireDefault(_disc);

var _divideCircle = require('./lib/divide-circle');

var _divideCircle2 = _interopRequireDefault(_divideCircle);

var _divideSquare = require('./lib/divide-square');

var _divideSquare2 = _interopRequireDefault(_divideSquare);

var _divide = require('./lib/divide');

var _divide2 = _interopRequireDefault(_divide);

var _dollarSign = require('./lib/dollar-sign');

var _dollarSign2 = _interopRequireDefault(_dollarSign);

var _downloadCloud = require('./lib/download-cloud');

var _downloadCloud2 = _interopRequireDefault(_downloadCloud);

var _download = require('./lib/download');

var _download2 = _interopRequireDefault(_download);

var _dribbble = require('./lib/dribbble');

var _dribbble2 = _interopRequireDefault(_dribbble);

var _droplet = require('./lib/droplet');

var _droplet2 = _interopRequireDefault(_droplet);

var _edit = require('./lib/edit-2');

var _edit2 = _interopRequireDefault(_edit);

var _edit3 = require('./lib/edit-3');

var _edit4 = _interopRequireDefault(_edit3);

var _edit5 = require('./lib/edit');

var _edit6 = _interopRequireDefault(_edit5);

var _externalLink = require('./lib/external-link');

var _externalLink2 = _interopRequireDefault(_externalLink);

var _eyeOff = require('./lib/eye-off');

var _eyeOff2 = _interopRequireDefault(_eyeOff);

var _eye = require('./lib/eye');

var _eye2 = _interopRequireDefault(_eye);

var _facebook = require('./lib/facebook');

var _facebook2 = _interopRequireDefault(_facebook);

var _fastForward = require('./lib/fast-forward');

var _fastForward2 = _interopRequireDefault(_fastForward);

var _feather = require('./lib/feather');

var _feather2 = _interopRequireDefault(_feather);

var _figma = require('./lib/figma');

var _figma2 = _interopRequireDefault(_figma);

var _fileMinus = require('./lib/file-minus');

var _fileMinus2 = _interopRequireDefault(_fileMinus);

var _filePlus = require('./lib/file-plus');

var _filePlus2 = _interopRequireDefault(_filePlus);

var _fileText = require('./lib/file-text');

var _fileText2 = _interopRequireDefault(_fileText);

var _file = require('./lib/file');

var _file2 = _interopRequireDefault(_file);

var _film = require('./lib/film');

var _film2 = _interopRequireDefault(_film);

var _filter = require('./lib/filter');

var _filter2 = _interopRequireDefault(_filter);

var _flag = require('./lib/flag');

var _flag2 = _interopRequireDefault(_flag);

var _folderMinus = require('./lib/folder-minus');

var _folderMinus2 = _interopRequireDefault(_folderMinus);

var _folderPlus = require('./lib/folder-plus');

var _folderPlus2 = _interopRequireDefault(_folderPlus);

var _folder = require('./lib/folder');

var _folder2 = _interopRequireDefault(_folder);

var _framer = require('./lib/framer');

var _framer2 = _interopRequireDefault(_framer);

var _frown = require('./lib/frown');

var _frown2 = _interopRequireDefault(_frown);

var _gift = require('./lib/gift');

var _gift2 = _interopRequireDefault(_gift);

var _gitBranch = require('./lib/git-branch');

var _gitBranch2 = _interopRequireDefault(_gitBranch);

var _gitCommit = require('./lib/git-commit');

var _gitCommit2 = _interopRequireDefault(_gitCommit);

var _gitMerge = require('./lib/git-merge');

var _gitMerge2 = _interopRequireDefault(_gitMerge);

var _gitPullRequest = require('./lib/git-pull-request');

var _gitPullRequest2 = _interopRequireDefault(_gitPullRequest);

var _github = require('./lib/github');

var _github2 = _interopRequireDefault(_github);

var _gitlab = require('./lib/gitlab');

var _gitlab2 = _interopRequireDefault(_gitlab);

var _globe = require('./lib/globe');

var _globe2 = _interopRequireDefault(_globe);

var _grid = require('./lib/grid');

var _grid2 = _interopRequireDefault(_grid);

var _hardDrive = require('./lib/hard-drive');

var _hardDrive2 = _interopRequireDefault(_hardDrive);

var _hash = require('./lib/hash');

var _hash2 = _interopRequireDefault(_hash);

var _headphones = require('./lib/headphones');

var _headphones2 = _interopRequireDefault(_headphones);

var _heart = require('./lib/heart');

var _heart2 = _interopRequireDefault(_heart);

var _helpCircle = require('./lib/help-circle');

var _helpCircle2 = _interopRequireDefault(_helpCircle);

var _hexagon = require('./lib/hexagon');

var _hexagon2 = _interopRequireDefault(_hexagon);

var _home = require('./lib/home');

var _home2 = _interopRequireDefault(_home);

var _image = require('./lib/image');

var _image2 = _interopRequireDefault(_image);

var _inbox = require('./lib/inbox');

var _inbox2 = _interopRequireDefault(_inbox);

var _info = require('./lib/info');

var _info2 = _interopRequireDefault(_info);

var _instagram = require('./lib/instagram');

var _instagram2 = _interopRequireDefault(_instagram);

var _italic = require('./lib/italic');

var _italic2 = _interopRequireDefault(_italic);

var _key = require('./lib/key');

var _key2 = _interopRequireDefault(_key);

var _layers = require('./lib/layers');

var _layers2 = _interopRequireDefault(_layers);

var _layout = require('./lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _lifeBuoy = require('./lib/life-buoy');

var _lifeBuoy2 = _interopRequireDefault(_lifeBuoy);

var _link = require('./lib/link-2');

var _link2 = _interopRequireDefault(_link);

var _link3 = require('./lib/link');

var _link4 = _interopRequireDefault(_link3);

var _linkedin = require('./lib/linkedin');

var _linkedin2 = _interopRequireDefault(_linkedin);

var _list = require('./lib/list');

var _list2 = _interopRequireDefault(_list);

var _loader = require('./lib/loader');

var _loader2 = _interopRequireDefault(_loader);

var _lock = require('./lib/lock');

var _lock2 = _interopRequireDefault(_lock);

var _logIn = require('./lib/log-in');

var _logIn2 = _interopRequireDefault(_logIn);

var _logOut = require('./lib/log-out');

var _logOut2 = _interopRequireDefault(_logOut);

var _mail = require('./lib/mail');

var _mail2 = _interopRequireDefault(_mail);

var _mapPin = require('./lib/map-pin');

var _mapPin2 = _interopRequireDefault(_mapPin);

var _map = require('./lib/map');

var _map2 = _interopRequireDefault(_map);

var _maximize = require('./lib/maximize-2');

var _maximize2 = _interopRequireDefault(_maximize);

var _maximize3 = require('./lib/maximize');

var _maximize4 = _interopRequireDefault(_maximize3);

var _meh = require('./lib/meh');

var _meh2 = _interopRequireDefault(_meh);

var _menu = require('./lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _messageCircle = require('./lib/message-circle');

var _messageCircle2 = _interopRequireDefault(_messageCircle);

var _messageSquare = require('./lib/message-square');

var _messageSquare2 = _interopRequireDefault(_messageSquare);

var _micOff = require('./lib/mic-off');

var _micOff2 = _interopRequireDefault(_micOff);

var _mic = require('./lib/mic');

var _mic2 = _interopRequireDefault(_mic);

var _minimize = require('./lib/minimize-2');

var _minimize2 = _interopRequireDefault(_minimize);

var _minimize3 = require('./lib/minimize');

var _minimize4 = _interopRequireDefault(_minimize3);

var _minusCircle = require('./lib/minus-circle');

var _minusCircle2 = _interopRequireDefault(_minusCircle);

var _minusSquare = require('./lib/minus-square');

var _minusSquare2 = _interopRequireDefault(_minusSquare);

var _minus = require('./lib/minus');

var _minus2 = _interopRequireDefault(_minus);

var _monitor = require('./lib/monitor');

var _monitor2 = _interopRequireDefault(_monitor);

var _moon = require('./lib/moon');

var _moon2 = _interopRequireDefault(_moon);

var _moreHorizontal = require('./lib/more-horizontal');

var _moreHorizontal2 = _interopRequireDefault(_moreHorizontal);

var _moreVertical = require('./lib/more-vertical');

var _moreVertical2 = _interopRequireDefault(_moreVertical);

var _mousePointer = require('./lib/mouse-pointer');

var _mousePointer2 = _interopRequireDefault(_mousePointer);

var _move = require('./lib/move');

var _move2 = _interopRequireDefault(_move);

var _music = require('./lib/music');

var _music2 = _interopRequireDefault(_music);

var _navigation = require('./lib/navigation-2');

var _navigation2 = _interopRequireDefault(_navigation);

var _navigation3 = require('./lib/navigation');

var _navigation4 = _interopRequireDefault(_navigation3);

var _octagon = require('./lib/octagon');

var _octagon2 = _interopRequireDefault(_octagon);

var _package = require('./lib/package');

var _package2 = _interopRequireDefault(_package);

var _paperclip = require('./lib/paperclip');

var _paperclip2 = _interopRequireDefault(_paperclip);

var _pauseCircle = require('./lib/pause-circle');

var _pauseCircle2 = _interopRequireDefault(_pauseCircle);

var _pause = require('./lib/pause');

var _pause2 = _interopRequireDefault(_pause);

var _penTool = require('./lib/pen-tool');

var _penTool2 = _interopRequireDefault(_penTool);

var _percent = require('./lib/percent');

var _percent2 = _interopRequireDefault(_percent);

var _phoneCall = require('./lib/phone-call');

var _phoneCall2 = _interopRequireDefault(_phoneCall);

var _phoneForwarded = require('./lib/phone-forwarded');

var _phoneForwarded2 = _interopRequireDefault(_phoneForwarded);

var _phoneIncoming = require('./lib/phone-incoming');

var _phoneIncoming2 = _interopRequireDefault(_phoneIncoming);

var _phoneMissed = require('./lib/phone-missed');

var _phoneMissed2 = _interopRequireDefault(_phoneMissed);

var _phoneOff = require('./lib/phone-off');

var _phoneOff2 = _interopRequireDefault(_phoneOff);

var _phoneOutgoing = require('./lib/phone-outgoing');

var _phoneOutgoing2 = _interopRequireDefault(_phoneOutgoing);

var _phone = require('./lib/phone');

var _phone2 = _interopRequireDefault(_phone);

var _pieChart = require('./lib/pie-chart');

var _pieChart2 = _interopRequireDefault(_pieChart);

var _playCircle = require('./lib/play-circle');

var _playCircle2 = _interopRequireDefault(_playCircle);

var _play = require('./lib/play');

var _play2 = _interopRequireDefault(_play);

var _plusCircle = require('./lib/plus-circle');

var _plusCircle2 = _interopRequireDefault(_plusCircle);

var _plusSquare = require('./lib/plus-square');

var _plusSquare2 = _interopRequireDefault(_plusSquare);

var _plus = require('./lib/plus');

var _plus2 = _interopRequireDefault(_plus);

var _pocket = require('./lib/pocket');

var _pocket2 = _interopRequireDefault(_pocket);

var _power = require('./lib/power');

var _power2 = _interopRequireDefault(_power);

var _printer = require('./lib/printer');

var _printer2 = _interopRequireDefault(_printer);

var _radio = require('./lib/radio');

var _radio2 = _interopRequireDefault(_radio);

var _refreshCcw = require('./lib/refresh-ccw');

var _refreshCcw2 = _interopRequireDefault(_refreshCcw);

var _refreshCw = require('./lib/refresh-cw');

var _refreshCw2 = _interopRequireDefault(_refreshCw);

var _repeat = require('./lib/repeat');

var _repeat2 = _interopRequireDefault(_repeat);

var _rewind = require('./lib/rewind');

var _rewind2 = _interopRequireDefault(_rewind);

var _rotateCcw = require('./lib/rotate-ccw');

var _rotateCcw2 = _interopRequireDefault(_rotateCcw);

var _rotateCw = require('./lib/rotate-cw');

var _rotateCw2 = _interopRequireDefault(_rotateCw);

var _rss = require('./lib/rss');

var _rss2 = _interopRequireDefault(_rss);

var _save = require('./lib/save');

var _save2 = _interopRequireDefault(_save);

var _scissors = require('./lib/scissors');

var _scissors2 = _interopRequireDefault(_scissors);

var _search = require('./lib/search');

var _search2 = _interopRequireDefault(_search);

var _send = require('./lib/send');

var _send2 = _interopRequireDefault(_send);

var _server = require('./lib/server');

var _server2 = _interopRequireDefault(_server);

var _settings = require('./lib/settings');

var _settings2 = _interopRequireDefault(_settings);

var _share = require('./lib/share-2');

var _share2 = _interopRequireDefault(_share);

var _share3 = require('./lib/share');

var _share4 = _interopRequireDefault(_share3);

var _shieldOff = require('./lib/shield-off');

var _shieldOff2 = _interopRequireDefault(_shieldOff);

var _shield = require('./lib/shield');

var _shield2 = _interopRequireDefault(_shield);

var _shoppingBag = require('./lib/shopping-bag');

var _shoppingBag2 = _interopRequireDefault(_shoppingBag);

var _shoppingCart = require('./lib/shopping-cart');

var _shoppingCart2 = _interopRequireDefault(_shoppingCart);

var _shuffle = require('./lib/shuffle');

var _shuffle2 = _interopRequireDefault(_shuffle);

var _sidebar = require('./lib/sidebar');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _skipBack = require('./lib/skip-back');

var _skipBack2 = _interopRequireDefault(_skipBack);

var _skipForward = require('./lib/skip-forward');

var _skipForward2 = _interopRequireDefault(_skipForward);

var _slack = require('./lib/slack');

var _slack2 = _interopRequireDefault(_slack);

var _slash = require('./lib/slash');

var _slash2 = _interopRequireDefault(_slash);

var _sliders = require('./lib/sliders');

var _sliders2 = _interopRequireDefault(_sliders);

var _smartphone = require('./lib/smartphone');

var _smartphone2 = _interopRequireDefault(_smartphone);

var _smile = require('./lib/smile');

var _smile2 = _interopRequireDefault(_smile);

var _speaker = require('./lib/speaker');

var _speaker2 = _interopRequireDefault(_speaker);

var _square = require('./lib/square');

var _square2 = _interopRequireDefault(_square);

var _star = require('./lib/star');

var _star2 = _interopRequireDefault(_star);

var _stopCircle = require('./lib/stop-circle');

var _stopCircle2 = _interopRequireDefault(_stopCircle);

var _sun = require('./lib/sun');

var _sun2 = _interopRequireDefault(_sun);

var _sunrise = require('./lib/sunrise');

var _sunrise2 = _interopRequireDefault(_sunrise);

var _sunset = require('./lib/sunset');

var _sunset2 = _interopRequireDefault(_sunset);

var _tablet = require('./lib/tablet');

var _tablet2 = _interopRequireDefault(_tablet);

var _tag = require('./lib/tag');

var _tag2 = _interopRequireDefault(_tag);

var _target = require('./lib/target');

var _target2 = _interopRequireDefault(_target);

var _terminal = require('./lib/terminal');

var _terminal2 = _interopRequireDefault(_terminal);

var _thermometer = require('./lib/thermometer');

var _thermometer2 = _interopRequireDefault(_thermometer);

var _thumbsDown = require('./lib/thumbs-down');

var _thumbsDown2 = _interopRequireDefault(_thumbsDown);

var _thumbsUp = require('./lib/thumbs-up');

var _thumbsUp2 = _interopRequireDefault(_thumbsUp);

var _toggleLeft = require('./lib/toggle-left');

var _toggleLeft2 = _interopRequireDefault(_toggleLeft);

var _toggleRight = require('./lib/toggle-right');

var _toggleRight2 = _interopRequireDefault(_toggleRight);

var _tool = require('./lib/tool');

var _tool2 = _interopRequireDefault(_tool);

var _trash = require('./lib/trash-2');

var _trash2 = _interopRequireDefault(_trash);

var _trash3 = require('./lib/trash');

var _trash4 = _interopRequireDefault(_trash3);

var _trello = require('./lib/trello');

var _trello2 = _interopRequireDefault(_trello);

var _trendingDown = require('./lib/trending-down');

var _trendingDown2 = _interopRequireDefault(_trendingDown);

var _trendingUp = require('./lib/trending-up');

var _trendingUp2 = _interopRequireDefault(_trendingUp);

var _triangle = require('./lib/triangle');

var _triangle2 = _interopRequireDefault(_triangle);

var _truck = require('./lib/truck');

var _truck2 = _interopRequireDefault(_truck);

var _tv = require('./lib/tv');

var _tv2 = _interopRequireDefault(_tv);

var _twitch = require('./lib/twitch');

var _twitch2 = _interopRequireDefault(_twitch);

var _twitter = require('./lib/twitter');

var _twitter2 = _interopRequireDefault(_twitter);

var _type = require('./lib/type');

var _type2 = _interopRequireDefault(_type);

var _umbrella = require('./lib/umbrella');

var _umbrella2 = _interopRequireDefault(_umbrella);

var _underline = require('./lib/underline');

var _underline2 = _interopRequireDefault(_underline);

var _unlock = require('./lib/unlock');

var _unlock2 = _interopRequireDefault(_unlock);

var _uploadCloud = require('./lib/upload-cloud');

var _uploadCloud2 = _interopRequireDefault(_uploadCloud);

var _upload = require('./lib/upload');

var _upload2 = _interopRequireDefault(_upload);

var _userCheck = require('./lib/user-check');

var _userCheck2 = _interopRequireDefault(_userCheck);

var _userMinus = require('./lib/user-minus');

var _userMinus2 = _interopRequireDefault(_userMinus);

var _userPlus = require('./lib/user-plus');

var _userPlus2 = _interopRequireDefault(_userPlus);

var _userX = require('./lib/user-x');

var _userX2 = _interopRequireDefault(_userX);

var _user = require('./lib/user');

var _user2 = _interopRequireDefault(_user);

var _users = require('./lib/users');

var _users2 = _interopRequireDefault(_users);

var _videoOff = require('./lib/video-off');

var _videoOff2 = _interopRequireDefault(_videoOff);

var _video = require('./lib/video');

var _video2 = _interopRequireDefault(_video);

var _voicemail = require('./lib/voicemail');

var _voicemail2 = _interopRequireDefault(_voicemail);

var _volume = require('./lib/volume-1');

var _volume2 = _interopRequireDefault(_volume);

var _volume3 = require('./lib/volume-2');

var _volume4 = _interopRequireDefault(_volume3);

var _volumeX = require('./lib/volume-x');

var _volumeX2 = _interopRequireDefault(_volumeX);

var _volume5 = require('./lib/volume');

var _volume6 = _interopRequireDefault(_volume5);

var _watch = require('./lib/watch');

var _watch2 = _interopRequireDefault(_watch);

var _wifiOff = require('./lib/wifi-off');

var _wifiOff2 = _interopRequireDefault(_wifiOff);

var _wifi = require('./lib/wifi');

var _wifi2 = _interopRequireDefault(_wifi);

var _wind = require('./lib/wind');

var _wind2 = _interopRequireDefault(_wind);

var _xCircle = require('./lib/x-circle');

var _xCircle2 = _interopRequireDefault(_xCircle);

var _xOctagon = require('./lib/x-octagon');

var _xOctagon2 = _interopRequireDefault(_xOctagon);

var _xSquare = require('./lib/x-square');

var _xSquare2 = _interopRequireDefault(_xSquare);

var _x = require('./lib/x');

var _x2 = _interopRequireDefault(_x);

var _youtube = require('./lib/youtube');

var _youtube2 = _interopRequireDefault(_youtube);

var _zapOff = require('./lib/zap-off');

var _zapOff2 = _interopRequireDefault(_zapOff);

var _zap = require('./lib/zap');

var _zap2 = _interopRequireDefault(_zap);

var _zoomIn = require('./lib/zoom-in');

var _zoomIn2 = _interopRequireDefault(_zoomIn);

var _zoomOut = require('./lib/zoom-out');

var _zoomOut2 = _interopRequireDefault(_zoomOut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Activity = _activity2.default;
exports.Airplay = _airplay2.default;
exports.AlertCircle = _alertCircle2.default;
exports.AlertOctagon = _alertOctagon2.default;
exports.AlertTriangle = _alertTriangle2.default;
exports.AlignCenter = _alignCenter2.default;
exports.AlignJustify = _alignJustify2.default;
exports.AlignLeft = _alignLeft2.default;
exports.AlignRight = _alignRight2.default;
exports.Anchor = _anchor2.default;
exports.Aperture = _aperture2.default;
exports.Archive = _archive2.default;
exports.ArrowDownCircle = _arrowDownCircle2.default;
exports.ArrowDownLeft = _arrowDownLeft2.default;
exports.ArrowDownRight = _arrowDownRight2.default;
exports.ArrowDown = _arrowDown2.default;
exports.ArrowLeftCircle = _arrowLeftCircle2.default;
exports.ArrowLeft = _arrowLeft2.default;
exports.ArrowRightCircle = _arrowRightCircle2.default;
exports.ArrowRight = _arrowRight2.default;
exports.ArrowUpCircle = _arrowUpCircle2.default;
exports.ArrowUpLeft = _arrowUpLeft2.default;
exports.ArrowUpRight = _arrowUpRight2.default;
exports.ArrowUp = _arrowUp2.default;
exports.AtSign = _atSign2.default;
exports.Award = _award2.default;
exports.BarChart2 = _barChart2.default;
exports.BarChart = _barChart4.default;
exports.BatteryCharging = _batteryCharging2.default;
exports.Battery = _battery2.default;
exports.BellOff = _bellOff2.default;
exports.Bell = _bell2.default;
exports.Bluetooth = _bluetooth2.default;
exports.Bold = _bold2.default;
exports.BookOpen = _bookOpen2.default;
exports.Book = _book2.default;
exports.Bookmark = _bookmark2.default;
exports.Box = _box2.default;
exports.Briefcase = _briefcase2.default;
exports.Calendar = _calendar2.default;
exports.CameraOff = _cameraOff2.default;
exports.Camera = _camera2.default;
exports.Cast = _cast2.default;
exports.CheckCircle = _checkCircle2.default;
exports.CheckSquare = _checkSquare2.default;
exports.Check = _check2.default;
exports.ChevronDown = _chevronDown2.default;
exports.ChevronLeft = _chevronLeft2.default;
exports.ChevronRight = _chevronRight2.default;
exports.ChevronUp = _chevronUp2.default;
exports.ChevronsDown = _chevronsDown2.default;
exports.ChevronsLeft = _chevronsLeft2.default;
exports.ChevronsRight = _chevronsRight2.default;
exports.ChevronsUp = _chevronsUp2.default;
exports.Chrome = _chrome2.default;
exports.Circle = _circle2.default;
exports.Clipboard = _clipboard2.default;
exports.Clock = _clock2.default;
exports.CloudDrizzle = _cloudDrizzle2.default;
exports.CloudLightning = _cloudLightning2.default;
exports.CloudOff = _cloudOff2.default;
exports.CloudRain = _cloudRain2.default;
exports.CloudSnow = _cloudSnow2.default;
exports.Cloud = _cloud2.default;
exports.Code = _code2.default;
exports.Codepen = _codepen2.default;
exports.Codesandbox = _codesandbox2.default;
exports.Coffee = _coffee2.default;
exports.Columns = _columns2.default;
exports.Command = _command2.default;
exports.Compass = _compass2.default;
exports.Copy = _copy2.default;
exports.CornerDownLeft = _cornerDownLeft2.default;
exports.CornerDownRight = _cornerDownRight2.default;
exports.CornerLeftDown = _cornerLeftDown2.default;
exports.CornerLeftUp = _cornerLeftUp2.default;
exports.CornerRightDown = _cornerRightDown2.default;
exports.CornerRightUp = _cornerRightUp2.default;
exports.CornerUpLeft = _cornerUpLeft2.default;
exports.CornerUpRight = _cornerUpRight2.default;
exports.Cpu = _cpu2.default;
exports.CreditCard = _creditCard2.default;
exports.Crop = _crop2.default;
exports.Crosshair = _crosshair2.default;
exports.Database = _database2.default;
exports.Delete = _delete2.default;
exports.Disc = _disc2.default;
exports.DivideCircle = _divideCircle2.default;
exports.DivideSquare = _divideSquare2.default;
exports.Divide = _divide2.default;
exports.DollarSign = _dollarSign2.default;
exports.DownloadCloud = _downloadCloud2.default;
exports.Download = _download2.default;
exports.Dribbble = _dribbble2.default;
exports.Droplet = _droplet2.default;
exports.Edit2 = _edit2.default;
exports.Edit3 = _edit4.default;
exports.Edit = _edit6.default;
exports.ExternalLink = _externalLink2.default;
exports.EyeOff = _eyeOff2.default;
exports.Eye = _eye2.default;
exports.Facebook = _facebook2.default;
exports.FastForward = _fastForward2.default;
exports.Feather = _feather2.default;
exports.Figma = _figma2.default;
exports.FileMinus = _fileMinus2.default;
exports.FilePlus = _filePlus2.default;
exports.FileText = _fileText2.default;
exports.File = _file2.default;
exports.Film = _film2.default;
exports.Filter = _filter2.default;
exports.Flag = _flag2.default;
exports.FolderMinus = _folderMinus2.default;
exports.FolderPlus = _folderPlus2.default;
exports.Folder = _folder2.default;
exports.Framer = _framer2.default;
exports.Frown = _frown2.default;
exports.Gift = _gift2.default;
exports.GitBranch = _gitBranch2.default;
exports.GitCommit = _gitCommit2.default;
exports.GitMerge = _gitMerge2.default;
exports.GitPullRequest = _gitPullRequest2.default;
exports.Github = _github2.default;
exports.Gitlab = _gitlab2.default;
exports.Globe = _globe2.default;
exports.Grid = _grid2.default;
exports.HardDrive = _hardDrive2.default;
exports.Hash = _hash2.default;
exports.Headphones = _headphones2.default;
exports.Heart = _heart2.default;
exports.HelpCircle = _helpCircle2.default;
exports.Hexagon = _hexagon2.default;
exports.Home = _home2.default;
exports.Image = _image2.default;
exports.Inbox = _inbox2.default;
exports.Info = _info2.default;
exports.Instagram = _instagram2.default;
exports.Italic = _italic2.default;
exports.Key = _key2.default;
exports.Layers = _layers2.default;
exports.Layout = _layout2.default;
exports.LifeBuoy = _lifeBuoy2.default;
exports.Link2 = _link2.default;
exports.Link = _link4.default;
exports.Linkedin = _linkedin2.default;
exports.List = _list2.default;
exports.Loader = _loader2.default;
exports.Lock = _lock2.default;
exports.LogIn = _logIn2.default;
exports.LogOut = _logOut2.default;
exports.Mail = _mail2.default;
exports.MapPin = _mapPin2.default;
exports.Map = _map2.default;
exports.Maximize2 = _maximize2.default;
exports.Maximize = _maximize4.default;
exports.Meh = _meh2.default;
exports.Menu = _menu2.default;
exports.MessageCircle = _messageCircle2.default;
exports.MessageSquare = _messageSquare2.default;
exports.MicOff = _micOff2.default;
exports.Mic = _mic2.default;
exports.Minimize2 = _minimize2.default;
exports.Minimize = _minimize4.default;
exports.MinusCircle = _minusCircle2.default;
exports.MinusSquare = _minusSquare2.default;
exports.Minus = _minus2.default;
exports.Monitor = _monitor2.default;
exports.Moon = _moon2.default;
exports.MoreHorizontal = _moreHorizontal2.default;
exports.MoreVertical = _moreVertical2.default;
exports.MousePointer = _mousePointer2.default;
exports.Move = _move2.default;
exports.Music = _music2.default;
exports.Navigation2 = _navigation2.default;
exports.Navigation = _navigation4.default;
exports.Octagon = _octagon2.default;
exports.Package = _package2.default;
exports.Paperclip = _paperclip2.default;
exports.PauseCircle = _pauseCircle2.default;
exports.Pause = _pause2.default;
exports.PenTool = _penTool2.default;
exports.Percent = _percent2.default;
exports.PhoneCall = _phoneCall2.default;
exports.PhoneForwarded = _phoneForwarded2.default;
exports.PhoneIncoming = _phoneIncoming2.default;
exports.PhoneMissed = _phoneMissed2.default;
exports.PhoneOff = _phoneOff2.default;
exports.PhoneOutgoing = _phoneOutgoing2.default;
exports.Phone = _phone2.default;
exports.PieChart = _pieChart2.default;
exports.PlayCircle = _playCircle2.default;
exports.Play = _play2.default;
exports.PlusCircle = _plusCircle2.default;
exports.PlusSquare = _plusSquare2.default;
exports.Plus = _plus2.default;
exports.Pocket = _pocket2.default;
exports.Power = _power2.default;
exports.Printer = _printer2.default;
exports.Radio = _radio2.default;
exports.RefreshCcw = _refreshCcw2.default;
exports.RefreshCw = _refreshCw2.default;
exports.Repeat = _repeat2.default;
exports.Rewind = _rewind2.default;
exports.RotateCcw = _rotateCcw2.default;
exports.RotateCw = _rotateCw2.default;
exports.Rss = _rss2.default;
exports.Save = _save2.default;
exports.Scissors = _scissors2.default;
exports.Search = _search2.default;
exports.Send = _send2.default;
exports.Server = _server2.default;
exports.Settings = _settings2.default;
exports.Share2 = _share2.default;
exports.Share = _share4.default;
exports.ShieldOff = _shieldOff2.default;
exports.Shield = _shield2.default;
exports.ShoppingBag = _shoppingBag2.default;
exports.ShoppingCart = _shoppingCart2.default;
exports.Shuffle = _shuffle2.default;
exports.Sidebar = _sidebar2.default;
exports.SkipBack = _skipBack2.default;
exports.SkipForward = _skipForward2.default;
exports.Slack = _slack2.default;
exports.Slash = _slash2.default;
exports.Sliders = _sliders2.default;
exports.Smartphone = _smartphone2.default;
exports.Smile = _smile2.default;
exports.Speaker = _speaker2.default;
exports.Square = _square2.default;
exports.Star = _star2.default;
exports.StopCircle = _stopCircle2.default;
exports.Sun = _sun2.default;
exports.Sunrise = _sunrise2.default;
exports.Sunset = _sunset2.default;
exports.Tablet = _tablet2.default;
exports.Tag = _tag2.default;
exports.Target = _target2.default;
exports.Terminal = _terminal2.default;
exports.Thermometer = _thermometer2.default;
exports.ThumbsDown = _thumbsDown2.default;
exports.ThumbsUp = _thumbsUp2.default;
exports.ToggleLeft = _toggleLeft2.default;
exports.ToggleRight = _toggleRight2.default;
exports.Tool = _tool2.default;
exports.Trash2 = _trash2.default;
exports.Trash = _trash4.default;
exports.Trello = _trello2.default;
exports.TrendingDown = _trendingDown2.default;
exports.TrendingUp = _trendingUp2.default;
exports.Triangle = _triangle2.default;
exports.Truck = _truck2.default;
exports.Tv = _tv2.default;
exports.Twitch = _twitch2.default;
exports.Twitter = _twitter2.default;
exports.Type = _type2.default;
exports.Umbrella = _umbrella2.default;
exports.Underline = _underline2.default;
exports.Unlock = _unlock2.default;
exports.UploadCloud = _uploadCloud2.default;
exports.Upload = _upload2.default;
exports.UserCheck = _userCheck2.default;
exports.UserMinus = _userMinus2.default;
exports.UserPlus = _userPlus2.default;
exports.UserX = _userX2.default;
exports.User = _user2.default;
exports.Users = _users2.default;
exports.VideoOff = _videoOff2.default;
exports.Video = _video2.default;
exports.Voicemail = _voicemail2.default;
exports.Volume1 = _volume2.default;
exports.Volume2 = _volume4.default;
exports.VolumeX = _volumeX2.default;
exports.Volume = _volume6.default;
exports.Watch = _watch2.default;
exports.WifiOff = _wifiOff2.default;
exports.Wifi = _wifi2.default;
exports.Wind = _wind2.default;
exports.XCircle = _xCircle2.default;
exports.XOctagon = _xOctagon2.default;
exports.XSquare = _xSquare2.default;
exports.X = _x2.default;
exports.Youtube = _youtube2.default;
exports.ZapOff = _zapOff2.default;
exports.Zap = _zap2.default;
exports.ZoomIn = _zoomIn2.default;
exports.ZoomOut = _zoomOut2.default;