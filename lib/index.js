'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomOut = exports.ZoomIn = exports.Zap = exports.ZapOff = exports.Youtube = exports.X = exports.XSquare = exports.XOctagon = exports.XCircle = exports.Wrench = exports.WrapText = exports.Wind = exports.Wifi = exports.WifiOff = exports.Webcam = exports.Watch = exports.Wand = exports.Wallet = exports.Volume = exports.VolumeX = exports.Volume2 = exports.Volume1 = exports.Voicemail = exports.View = exports.Video = exports.VideoOff = exports.Vibrate = exports.Verified = exports.Users = exports.User = exports.UserX = exports.UserPlus = exports.UserMinus = exports.UserCheck = exports.Upload = exports.UploadCloud = exports.Unlock = exports.Unlink = exports.Unlink2 = exports.Undo = exports.Underline = exports.Umbrella = exports.Type = exports.Twitter = exports.Twitch = exports.Tv = undefined;
exports.Tv2 = exports.Truck = exports.Triangle = exports.TrendingUp = exports.TrendingDown = exports.Trello = exports.Trash = exports.Trash2 = exports.Tornado = exports.ToggleRight = exports.ToggleLeft = exports.Timer = exports.TimerReset = exports.TimerOff = exports.Ticket = exports.ThumbsUp = exports.ThumbsDown = exports.Thermometer = exports.ThermometerSun = exports.ThermometerSnowflake = exports.TextCursor = exports.TextCursorInput = exports.Terminal = exports.TerminalSquare = exports.Tent = exports.Target = exports.Tag = exports.Tablet = exports.Table = exports.SwitchCamera = exports.SwissFranc = exports.Superscript = exports.Sunset = exports.Sunrise = exports.Sun = exports.Subscript = exports.Strikethrough = exports.StopCircle = exports.Star = exports.StarHalf = exports.Square = exports.Sprout = exports.Speaker = exports.SortDesc = exports.SortAsc = exports.Snowflake = exports.Smile = exports.Smartphone = exports.SmartphoneCharging = exports.Sliders = exports.Slash = exports.Slack = exports.Skull = exports.SkipForward = exports.SkipBack = exports.Signal = exports.SignalZero = exports.SignalMedium = exports.SignalLow = exports.SignalHigh = exports.Sigma = exports.Sidebar = exports.SidebarOpen = exports.SidebarClose = exports.Shuffle = exports.Shrink = exports.Shovel = exports.ShoppingCart = exports.ShoppingBag = exports.Shirt = exports.Shield = exports.ShieldOff = exports.ShieldClose = exports.ShieldCheck = exports.ShieldAlert = exports.Sheet = exports.Share = exports.Share2 = exports.Settings = exports.Settings2 = exports.Server = exports.ServerOff = exports.ServerCrash = exports.SeparatorVertical = exports.SeparatorHorizontal = exports.Send = exports.Search = exports.ScreenShare = exports.ScreenShareOff = exports.Scissors = exports.Scan = exports.ScanLine = exports.Scale = exports.Save = exports.RussianRuble = exports.Ruler = exports.Rss = exports.RotateCw = exports.RotateCcw = exports.RockingChair = undefined;
exports.Rewind = exports.Reply = exports.ReplyAll = exports.Repeat = exports.Repeat1 = exports.Regex = exports.RefreshCw = exports.RefreshCcw = exports.Redo = exports.Radio = exports.RadioReceiver = exports.Quote = exports.QrCode = exports.Printer = exports.Power = exports.PowerOff = exports.PoundSterling = exports.Pointer = exports.Podcast = exports.Pocket = exports.Plus = exports.PlusSquare = exports.PlusCircle = exports.PlugZap = exports.Play = exports.PlayCircle = exports.Plane = exports.Pipette = exports.Pin = exports.PiggyBank = exports.PieChart = exports.Phone = exports.PhoneOutgoing = exports.PhoneOff = exports.PhoneMissed = exports.PhoneIncoming = exports.PhoneForwarded = exports.PhoneCall = exports.PersonStanding = exports.Percent = exports.Pencil = exports.PenTool = exports.Pause = exports.PauseOctagon = exports.PauseCircle = exports.Paperclip = exports.Palette = exports.Package = exports.PackageX = exports.PackageSearch = exports.PackagePlus = exports.PackageMinus = exports.PackageCheck = exports.Outdent = exports.Option = exports.Octagon = exports.Network = exports.Navigation = exports.Navigation2 = exports.Music = exports.Move = exports.MoveVertical = exports.MoveHorizontal = exports.MoveDiagonal = exports.MoveDiagonal2 = exports.MousePointer = exports.MousePointerClick = exports.MousePointer2 = exports.Mountain = exports.MountainSnow = exports.MoreVertical = exports.MoreHorizontal = exports.Moon = exports.Monitor = exports.MonitorSpeaker = exports.MonitorOff = exports.Minus = exports.MinusSquare = exports.MinusCircle = exports.Minimize = exports.Minimize2 = exports.Mic = exports.MicOff = exports.MessageSquare = exports.MessageCircle = exports.Menu = exports.Meh = exports.Megaphone = exports.Maximize = exports.Maximize2 = exports.Map = exports.MapPin = exports.Mail = exports.LogOut = exports.LogIn = exports.Lock = exports.Locate = exports.LocateFixed = exports.Loader = exports.Loader2 = undefined;
exports.List = exports.ListX = exports.ListPlus = exports.ListOrdered = exports.ListMinus = exports.ListChecks = exports.Linkedin = exports.Link = exports.Link2 = exports.Link2Off = exports.Lightbulb = exports.LightbulbOff = exports.LifeBuoy = exports.Library = exports.Layout = exports.LayoutTemplate = exports.LayoutList = exports.LayoutGrid = exports.LayoutDashboard = exports.Layers = exports.Lasso = exports.LassoSelect = exports.Laptop = exports.Laptop2 = exports.Languages = exports.Landmark = exports.Key = exports.JapaneseYen = exports.Italic = exports.Instagram = exports.Inspect = exports.Info = exports.Infinity = exports.IndianRupee = exports.Indent = exports.Inbox = exports.Import = exports.Image = exports.ImagePlus = exports.ImageOff = exports.ImageMinus = exports.Home = exports.History = exports.Highlighter = exports.Hexagon = exports.HelpCircle = exports.Heart = exports.Headphones = exports.Haze = exports.Hash = exports.HardHat = exports.HardDrive = exports.Hand = exports.HandMetal = exports.Hammer = exports.GripVertical = exports.GripHorizontal = exports.Grid = exports.GraduationCap = exports.Grab = exports.Globe = exports.Globe2 = exports.Glasses = exports.Gitlab = exports.Github = exports.GitPullRequest = exports.GitMerge = exports.GitCommit = exports.GitBranch = exports.GitBranchPlus = exports.Gift = exports.Ghost = exports.Gem = exports.Gavel = exports.Gauge = exports.Gamepad = exports.Gamepad2 = exports.FunctionSquare = exports.Frown = exports.Framer = exports.Forward = exports.FormInput = exports.Folder = exports.FolderPlus = exports.FolderOpen = exports.FolderMinus = exports.FlaskRound = exports.FlaskConical = exports.Flashlight = exports.FlashlightOff = exports.Flame = exports.Flag = exports.FlagTriangleRight = exports.FlagTriangleLeft = exports.Filter = exports.Film = exports.Files = exports.File = exports.FileX = exports.FileX2 = undefined;
exports.FileText = exports.FileSearch = exports.FilePlus = exports.FilePlus2 = exports.FileOutput = exports.FileMinus = exports.FileMinus2 = exports.FileInput = exports.FileDigit = exports.FileCode = exports.FileCheck = exports.FileCheck2 = exports.Figma = exports.Feather = exports.FastForward = exports.Facebook = exports.Eye = exports.EyeOff = exports.ExternalLink = exports.Expand = exports.Euro = exports.Equal = exports.EqualNot = exports.Egg = exports.Edit = exports.Edit3 = exports.Edit2 = exports.Drumstick = exports.Droplets = exports.Droplet = exports.Dribbble = exports.Download = exports.DownloadCloud = exports.DollarSign = exports.Divide = exports.DivideSquare = exports.DivideCircle = exports.Disc = exports.Delete = exports.Database = exports.Currency = exports.Crown = exports.Crosshair = exports.Cross = exports.Crop = exports.CreditCard = exports.Cpu = exports.CornerUpRight = exports.CornerUpLeft = exports.CornerRightUp = exports.CornerRightDown = exports.CornerLeftUp = exports.CornerLeftDown = exports.CornerDownRight = exports.CornerDownLeft = exports.Copyright = exports.Copyleft = exports.Copy = exports.Contrast = exports.Contact = exports.Compass = exports.Command = exports.Columns = exports.Coins = exports.Coffee = exports.Codesandbox = exports.Codepen = exports.Code = exports.Code2 = exports.Clover = exports.Cloudy = exports.Cloud = exports.CloudSun = exports.CloudSnow = exports.CloudRain = exports.CloudRainWind = exports.CloudOff = exports.CloudMoon = exports.CloudLightning = exports.CloudHail = exports.CloudFog = exports.CloudDrizzle = exports.Clock = exports.Clock9 = exports.Clock8 = exports.Clock7 = exports.Clock6 = exports.Clock5 = exports.Clock4 = exports.Clock3 = exports.Clock2 = exports.Clock12 = exports.Clock11 = exports.Clock10 = exports.Clock1 = exports.Clipboard = exports.ClipboardX = exports.ClipboardList = exports.ClipboardCopy = exports.ClipboardCheck = undefined;
exports.Circle = exports.CircleSlashed = exports.Chrome = exports.ChevronsUp = exports.ChevronsUpDown = exports.ChevronsRight = exports.ChevronsLeft = exports.ChevronsDown = exports.ChevronsDownUp = exports.ChevronUp = exports.ChevronRight = exports.ChevronLeft = exports.ChevronLast = exports.ChevronFirst = exports.ChevronDown = exports.Check = exports.CheckSquare = exports.CheckCircle = exports.CheckCircle2 = exports.Cast = exports.Carrot = exports.Car = exports.Camera = exports.CameraOff = exports.Calendar = exports.Calculator = exports.Bus = exports.Building = exports.Bug = exports.Brush = exports.Briefcase = exports.Box = exports.BoxSelect = exports.Bot = exports.Bookmark = exports.BookmarkPlus = exports.BookmarkMinus = exports.Book = exports.BookOpen = exports.Bold = exports.Bluetooth = exports.BluetoothSearching = exports.BluetoothOff = exports.BluetoothConnected = exports.Bitcoin = exports.Binary = exports.Bike = exports.Bell = exports.BellRing = exports.BellPlus = exports.BellOff = exports.BellMinus = exports.Beaker = exports.Battery = exports.BatteryMedium = exports.BatteryLow = exports.BatteryFull = exports.BatteryCharging = exports.BarChart = exports.BarChart2 = exports.Banknote = exports.Axe = exports.Award = exports.AtSign = exports.Asterisk = exports.ArrowUp = exports.ArrowUpRight = exports.ArrowUpLeft = exports.ArrowUpCircle = exports.ArrowRight = exports.ArrowRightCircle = exports.ArrowLeft = exports.ArrowLeftRight = exports.ArrowLeftCircle = exports.ArrowDown = exports.ArrowDownRight = exports.ArrowDownLeft = exports.ArrowDownCircle = exports.ArrowBigUp = exports.ArrowBigRight = exports.ArrowBigLeft = exports.ArrowBigDown = exports.Archive = exports.Aperture = exports.Anchor = exports.AlignRight = exports.AlignLeft = exports.AlignJustify = exports.AlignCenter = exports.AlertTriangle = exports.AlertOctagon = exports.AlertCircle = exports.Album = exports.AlarmPlus = exports.AlarmMinus = exports.AlarmClock = exports.AlarmClockOff = exports.AlarmCheck = exports.Airplay = exports.Activity = undefined;

var _activity = require('./lib/activity');

var _activity2 = _interopRequireDefault(_activity);

var _airplay = require('./lib/airplay');

var _airplay2 = _interopRequireDefault(_airplay);

var _alarmCheck = require('./lib/alarm-check');

var _alarmCheck2 = _interopRequireDefault(_alarmCheck);

var _alarmClockOff = require('./lib/alarm-clock-off');

var _alarmClockOff2 = _interopRequireDefault(_alarmClockOff);

var _alarmClock = require('./lib/alarm-clock');

var _alarmClock2 = _interopRequireDefault(_alarmClock);

var _alarmMinus = require('./lib/alarm-minus');

var _alarmMinus2 = _interopRequireDefault(_alarmMinus);

var _alarmPlus = require('./lib/alarm-plus');

var _alarmPlus2 = _interopRequireDefault(_alarmPlus);

var _album = require('./lib/album');

var _album2 = _interopRequireDefault(_album);

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

var _arrowBigDown = require('./lib/arrow-big-down');

var _arrowBigDown2 = _interopRequireDefault(_arrowBigDown);

var _arrowBigLeft = require('./lib/arrow-big-left');

var _arrowBigLeft2 = _interopRequireDefault(_arrowBigLeft);

var _arrowBigRight = require('./lib/arrow-big-right');

var _arrowBigRight2 = _interopRequireDefault(_arrowBigRight);

var _arrowBigUp = require('./lib/arrow-big-up');

var _arrowBigUp2 = _interopRequireDefault(_arrowBigUp);

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

var _arrowLeftRight = require('./lib/arrow-left-right');

var _arrowLeftRight2 = _interopRequireDefault(_arrowLeftRight);

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

var _asterisk = require('./lib/asterisk');

var _asterisk2 = _interopRequireDefault(_asterisk);

var _atSign = require('./lib/at-sign');

var _atSign2 = _interopRequireDefault(_atSign);

var _award = require('./lib/award');

var _award2 = _interopRequireDefault(_award);

var _axe = require('./lib/axe');

var _axe2 = _interopRequireDefault(_axe);

var _banknote = require('./lib/banknote');

var _banknote2 = _interopRequireDefault(_banknote);

var _barChart = require('./lib/bar-chart-2');

var _barChart2 = _interopRequireDefault(_barChart);

var _barChart3 = require('./lib/bar-chart');

var _barChart4 = _interopRequireDefault(_barChart3);

var _batteryCharging = require('./lib/battery-charging');

var _batteryCharging2 = _interopRequireDefault(_batteryCharging);

var _batteryFull = require('./lib/battery-full');

var _batteryFull2 = _interopRequireDefault(_batteryFull);

var _batteryLow = require('./lib/battery-low');

var _batteryLow2 = _interopRequireDefault(_batteryLow);

var _batteryMedium = require('./lib/battery-medium');

var _batteryMedium2 = _interopRequireDefault(_batteryMedium);

var _battery = require('./lib/battery');

var _battery2 = _interopRequireDefault(_battery);

var _beaker = require('./lib/beaker');

var _beaker2 = _interopRequireDefault(_beaker);

var _bellMinus = require('./lib/bell-minus');

var _bellMinus2 = _interopRequireDefault(_bellMinus);

var _bellOff = require('./lib/bell-off');

var _bellOff2 = _interopRequireDefault(_bellOff);

var _bellPlus = require('./lib/bell-plus');

var _bellPlus2 = _interopRequireDefault(_bellPlus);

var _bellRing = require('./lib/bell-ring');

var _bellRing2 = _interopRequireDefault(_bellRing);

var _bell = require('./lib/bell');

var _bell2 = _interopRequireDefault(_bell);

var _bike = require('./lib/bike');

var _bike2 = _interopRequireDefault(_bike);

var _binary = require('./lib/binary');

var _binary2 = _interopRequireDefault(_binary);

var _bitcoin = require('./lib/bitcoin');

var _bitcoin2 = _interopRequireDefault(_bitcoin);

var _bluetoothConnected = require('./lib/bluetooth-connected');

var _bluetoothConnected2 = _interopRequireDefault(_bluetoothConnected);

var _bluetoothOff = require('./lib/bluetooth-off');

var _bluetoothOff2 = _interopRequireDefault(_bluetoothOff);

var _bluetoothSearching = require('./lib/bluetooth-searching');

var _bluetoothSearching2 = _interopRequireDefault(_bluetoothSearching);

var _bluetooth = require('./lib/bluetooth');

var _bluetooth2 = _interopRequireDefault(_bluetooth);

var _bold = require('./lib/bold');

var _bold2 = _interopRequireDefault(_bold);

var _bookOpen = require('./lib/book-open');

var _bookOpen2 = _interopRequireDefault(_bookOpen);

var _book = require('./lib/book');

var _book2 = _interopRequireDefault(_book);

var _bookmarkMinus = require('./lib/bookmark-minus');

var _bookmarkMinus2 = _interopRequireDefault(_bookmarkMinus);

var _bookmarkPlus = require('./lib/bookmark-plus');

var _bookmarkPlus2 = _interopRequireDefault(_bookmarkPlus);

var _bookmark = require('./lib/bookmark');

var _bookmark2 = _interopRequireDefault(_bookmark);

var _bot = require('./lib/bot');

var _bot2 = _interopRequireDefault(_bot);

var _boxSelect = require('./lib/box-select');

var _boxSelect2 = _interopRequireDefault(_boxSelect);

var _box = require('./lib/box');

var _box2 = _interopRequireDefault(_box);

var _briefcase = require('./lib/briefcase');

var _briefcase2 = _interopRequireDefault(_briefcase);

var _brush = require('./lib/brush');

var _brush2 = _interopRequireDefault(_brush);

var _bug = require('./lib/bug');

var _bug2 = _interopRequireDefault(_bug);

var _building = require('./lib/building');

var _building2 = _interopRequireDefault(_building);

var _bus = require('./lib/bus');

var _bus2 = _interopRequireDefault(_bus);

var _calculator = require('./lib/calculator');

var _calculator2 = _interopRequireDefault(_calculator);

var _calendar = require('./lib/calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _cameraOff = require('./lib/camera-off');

var _cameraOff2 = _interopRequireDefault(_cameraOff);

var _camera = require('./lib/camera');

var _camera2 = _interopRequireDefault(_camera);

var _car = require('./lib/car');

var _car2 = _interopRequireDefault(_car);

var _carrot = require('./lib/carrot');

var _carrot2 = _interopRequireDefault(_carrot);

var _cast = require('./lib/cast');

var _cast2 = _interopRequireDefault(_cast);

var _checkCircle = require('./lib/check-circle-2');

var _checkCircle2 = _interopRequireDefault(_checkCircle);

var _checkCircle3 = require('./lib/check-circle');

var _checkCircle4 = _interopRequireDefault(_checkCircle3);

var _checkSquare = require('./lib/check-square');

var _checkSquare2 = _interopRequireDefault(_checkSquare);

var _check = require('./lib/check');

var _check2 = _interopRequireDefault(_check);

var _chevronDown = require('./lib/chevron-down');

var _chevronDown2 = _interopRequireDefault(_chevronDown);

var _chevronFirst = require('./lib/chevron-first');

var _chevronFirst2 = _interopRequireDefault(_chevronFirst);

var _chevronLast = require('./lib/chevron-last');

var _chevronLast2 = _interopRequireDefault(_chevronLast);

var _chevronLeft = require('./lib/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('./lib/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _chevronUp = require('./lib/chevron-up');

var _chevronUp2 = _interopRequireDefault(_chevronUp);

var _chevronsDownUp = require('./lib/chevrons-down-up');

var _chevronsDownUp2 = _interopRequireDefault(_chevronsDownUp);

var _chevronsDown = require('./lib/chevrons-down');

var _chevronsDown2 = _interopRequireDefault(_chevronsDown);

var _chevronsLeft = require('./lib/chevrons-left');

var _chevronsLeft2 = _interopRequireDefault(_chevronsLeft);

var _chevronsRight = require('./lib/chevrons-right');

var _chevronsRight2 = _interopRequireDefault(_chevronsRight);

var _chevronsUpDown = require('./lib/chevrons-up-down');

var _chevronsUpDown2 = _interopRequireDefault(_chevronsUpDown);

var _chevronsUp = require('./lib/chevrons-up');

var _chevronsUp2 = _interopRequireDefault(_chevronsUp);

var _chrome = require('./lib/chrome');

var _chrome2 = _interopRequireDefault(_chrome);

var _circleSlashed = require('./lib/circle-slashed');

var _circleSlashed2 = _interopRequireDefault(_circleSlashed);

var _circle = require('./lib/circle');

var _circle2 = _interopRequireDefault(_circle);

var _clipboardCheck = require('./lib/clipboard-check');

var _clipboardCheck2 = _interopRequireDefault(_clipboardCheck);

var _clipboardCopy = require('./lib/clipboard-copy');

var _clipboardCopy2 = _interopRequireDefault(_clipboardCopy);

var _clipboardList = require('./lib/clipboard-list');

var _clipboardList2 = _interopRequireDefault(_clipboardList);

var _clipboardX = require('./lib/clipboard-x');

var _clipboardX2 = _interopRequireDefault(_clipboardX);

var _clipboard = require('./lib/clipboard');

var _clipboard2 = _interopRequireDefault(_clipboard);

var _clock = require('./lib/clock-1');

var _clock2 = _interopRequireDefault(_clock);

var _clock3 = require('./lib/clock-10');

var _clock4 = _interopRequireDefault(_clock3);

var _clock5 = require('./lib/clock-11');

var _clock6 = _interopRequireDefault(_clock5);

var _clock7 = require('./lib/clock-12');

var _clock8 = _interopRequireDefault(_clock7);

var _clock9 = require('./lib/clock-2');

var _clock10 = _interopRequireDefault(_clock9);

var _clock11 = require('./lib/clock-3');

var _clock12 = _interopRequireDefault(_clock11);

var _clock13 = require('./lib/clock-4');

var _clock14 = _interopRequireDefault(_clock13);

var _clock15 = require('./lib/clock-5');

var _clock16 = _interopRequireDefault(_clock15);

var _clock17 = require('./lib/clock-6');

var _clock18 = _interopRequireDefault(_clock17);

var _clock19 = require('./lib/clock-7');

var _clock20 = _interopRequireDefault(_clock19);

var _clock21 = require('./lib/clock-8');

var _clock22 = _interopRequireDefault(_clock21);

var _clock23 = require('./lib/clock-9');

var _clock24 = _interopRequireDefault(_clock23);

var _clock25 = require('./lib/clock');

var _clock26 = _interopRequireDefault(_clock25);

var _cloudDrizzle = require('./lib/cloud-drizzle');

var _cloudDrizzle2 = _interopRequireDefault(_cloudDrizzle);

var _cloudFog = require('./lib/cloud-fog');

var _cloudFog2 = _interopRequireDefault(_cloudFog);

var _cloudHail = require('./lib/cloud-hail');

var _cloudHail2 = _interopRequireDefault(_cloudHail);

var _cloudLightning = require('./lib/cloud-lightning');

var _cloudLightning2 = _interopRequireDefault(_cloudLightning);

var _cloudMoon = require('./lib/cloud-moon');

var _cloudMoon2 = _interopRequireDefault(_cloudMoon);

var _cloudOff = require('./lib/cloud-off');

var _cloudOff2 = _interopRequireDefault(_cloudOff);

var _cloudRainWind = require('./lib/cloud-rain-wind');

var _cloudRainWind2 = _interopRequireDefault(_cloudRainWind);

var _cloudRain = require('./lib/cloud-rain');

var _cloudRain2 = _interopRequireDefault(_cloudRain);

var _cloudSnow = require('./lib/cloud-snow');

var _cloudSnow2 = _interopRequireDefault(_cloudSnow);

var _cloudSun = require('./lib/cloud-sun');

var _cloudSun2 = _interopRequireDefault(_cloudSun);

var _cloud = require('./lib/cloud');

var _cloud2 = _interopRequireDefault(_cloud);

var _cloudy = require('./lib/cloudy');

var _cloudy2 = _interopRequireDefault(_cloudy);

var _clover = require('./lib/clover');

var _clover2 = _interopRequireDefault(_clover);

var _code = require('./lib/code-2');

var _code2 = _interopRequireDefault(_code);

var _code3 = require('./lib/code');

var _code4 = _interopRequireDefault(_code3);

var _codepen = require('./lib/codepen');

var _codepen2 = _interopRequireDefault(_codepen);

var _codesandbox = require('./lib/codesandbox');

var _codesandbox2 = _interopRequireDefault(_codesandbox);

var _coffee = require('./lib/coffee');

var _coffee2 = _interopRequireDefault(_coffee);

var _coins = require('./lib/coins');

var _coins2 = _interopRequireDefault(_coins);

var _columns = require('./lib/columns');

var _columns2 = _interopRequireDefault(_columns);

var _command = require('./lib/command');

var _command2 = _interopRequireDefault(_command);

var _compass = require('./lib/compass');

var _compass2 = _interopRequireDefault(_compass);

var _contact = require('./lib/contact');

var _contact2 = _interopRequireDefault(_contact);

var _contrast = require('./lib/contrast');

var _contrast2 = _interopRequireDefault(_contrast);

var _copy = require('./lib/copy');

var _copy2 = _interopRequireDefault(_copy);

var _copyleft = require('./lib/copyleft');

var _copyleft2 = _interopRequireDefault(_copyleft);

var _copyright = require('./lib/copyright');

var _copyright2 = _interopRequireDefault(_copyright);

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

var _cross = require('./lib/cross');

var _cross2 = _interopRequireDefault(_cross);

var _crosshair = require('./lib/crosshair');

var _crosshair2 = _interopRequireDefault(_crosshair);

var _crown = require('./lib/crown');

var _crown2 = _interopRequireDefault(_crown);

var _currency = require('./lib/currency');

var _currency2 = _interopRequireDefault(_currency);

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

var _droplets = require('./lib/droplets');

var _droplets2 = _interopRequireDefault(_droplets);

var _drumstick = require('./lib/drumstick');

var _drumstick2 = _interopRequireDefault(_drumstick);

var _edit = require('./lib/edit-2');

var _edit2 = _interopRequireDefault(_edit);

var _edit3 = require('./lib/edit-3');

var _edit4 = _interopRequireDefault(_edit3);

var _edit5 = require('./lib/edit');

var _edit6 = _interopRequireDefault(_edit5);

var _egg = require('./lib/egg');

var _egg2 = _interopRequireDefault(_egg);

var _equalNot = require('./lib/equal-not');

var _equalNot2 = _interopRequireDefault(_equalNot);

var _equal = require('./lib/equal');

var _equal2 = _interopRequireDefault(_equal);

var _euro = require('./lib/euro');

var _euro2 = _interopRequireDefault(_euro);

var _expand = require('./lib/expand');

var _expand2 = _interopRequireDefault(_expand);

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

var _fileCheck = require('./lib/file-check-2');

var _fileCheck2 = _interopRequireDefault(_fileCheck);

var _fileCheck3 = require('./lib/file-check');

var _fileCheck4 = _interopRequireDefault(_fileCheck3);

var _fileCode = require('./lib/file-code');

var _fileCode2 = _interopRequireDefault(_fileCode);

var _fileDigit = require('./lib/file-digit');

var _fileDigit2 = _interopRequireDefault(_fileDigit);

var _fileInput = require('./lib/file-input');

var _fileInput2 = _interopRequireDefault(_fileInput);

var _fileMinus = require('./lib/file-minus-2');

var _fileMinus2 = _interopRequireDefault(_fileMinus);

var _fileMinus3 = require('./lib/file-minus');

var _fileMinus4 = _interopRequireDefault(_fileMinus3);

var _fileOutput = require('./lib/file-output');

var _fileOutput2 = _interopRequireDefault(_fileOutput);

var _filePlus = require('./lib/file-plus-2');

var _filePlus2 = _interopRequireDefault(_filePlus);

var _filePlus3 = require('./lib/file-plus');

var _filePlus4 = _interopRequireDefault(_filePlus3);

var _fileSearch = require('./lib/file-search');

var _fileSearch2 = _interopRequireDefault(_fileSearch);

var _fileText = require('./lib/file-text');

var _fileText2 = _interopRequireDefault(_fileText);

var _fileX = require('./lib/file-x-2');

var _fileX2 = _interopRequireDefault(_fileX);

var _fileX3 = require('./lib/file-x');

var _fileX4 = _interopRequireDefault(_fileX3);

var _file = require('./lib/file');

var _file2 = _interopRequireDefault(_file);

var _files = require('./lib/files');

var _files2 = _interopRequireDefault(_files);

var _film = require('./lib/film');

var _film2 = _interopRequireDefault(_film);

var _filter = require('./lib/filter');

var _filter2 = _interopRequireDefault(_filter);

var _flagTriangleLeft = require('./lib/flag-triangle-left');

var _flagTriangleLeft2 = _interopRequireDefault(_flagTriangleLeft);

var _flagTriangleRight = require('./lib/flag-triangle-right');

var _flagTriangleRight2 = _interopRequireDefault(_flagTriangleRight);

var _flag = require('./lib/flag');

var _flag2 = _interopRequireDefault(_flag);

var _flame = require('./lib/flame');

var _flame2 = _interopRequireDefault(_flame);

var _flashlightOff = require('./lib/flashlight-off');

var _flashlightOff2 = _interopRequireDefault(_flashlightOff);

var _flashlight = require('./lib/flashlight');

var _flashlight2 = _interopRequireDefault(_flashlight);

var _flaskConical = require('./lib/flask-conical');

var _flaskConical2 = _interopRequireDefault(_flaskConical);

var _flaskRound = require('./lib/flask-round');

var _flaskRound2 = _interopRequireDefault(_flaskRound);

var _folderMinus = require('./lib/folder-minus');

var _folderMinus2 = _interopRequireDefault(_folderMinus);

var _folderOpen = require('./lib/folder-open');

var _folderOpen2 = _interopRequireDefault(_folderOpen);

var _folderPlus = require('./lib/folder-plus');

var _folderPlus2 = _interopRequireDefault(_folderPlus);

var _folder = require('./lib/folder');

var _folder2 = _interopRequireDefault(_folder);

var _formInput = require('./lib/form-input');

var _formInput2 = _interopRequireDefault(_formInput);

var _forward = require('./lib/forward');

var _forward2 = _interopRequireDefault(_forward);

var _framer = require('./lib/framer');

var _framer2 = _interopRequireDefault(_framer);

var _frown = require('./lib/frown');

var _frown2 = _interopRequireDefault(_frown);

var _functionSquare = require('./lib/function-square');

var _functionSquare2 = _interopRequireDefault(_functionSquare);

var _gamepad = require('./lib/gamepad-2');

var _gamepad2 = _interopRequireDefault(_gamepad);

var _gamepad3 = require('./lib/gamepad');

var _gamepad4 = _interopRequireDefault(_gamepad3);

var _gauge = require('./lib/gauge');

var _gauge2 = _interopRequireDefault(_gauge);

var _gavel = require('./lib/gavel');

var _gavel2 = _interopRequireDefault(_gavel);

var _gem = require('./lib/gem');

var _gem2 = _interopRequireDefault(_gem);

var _ghost = require('./lib/ghost');

var _ghost2 = _interopRequireDefault(_ghost);

var _gift = require('./lib/gift');

var _gift2 = _interopRequireDefault(_gift);

var _gitBranchPlus = require('./lib/git-branch-plus');

var _gitBranchPlus2 = _interopRequireDefault(_gitBranchPlus);

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

var _glasses = require('./lib/glasses');

var _glasses2 = _interopRequireDefault(_glasses);

var _globe = require('./lib/globe-2');

var _globe2 = _interopRequireDefault(_globe);

var _globe3 = require('./lib/globe');

var _globe4 = _interopRequireDefault(_globe3);

var _grab = require('./lib/grab');

var _grab2 = _interopRequireDefault(_grab);

var _graduationCap = require('./lib/graduation-cap');

var _graduationCap2 = _interopRequireDefault(_graduationCap);

var _grid = require('./lib/grid');

var _grid2 = _interopRequireDefault(_grid);

var _gripHorizontal = require('./lib/grip-horizontal');

var _gripHorizontal2 = _interopRequireDefault(_gripHorizontal);

var _gripVertical = require('./lib/grip-vertical');

var _gripVertical2 = _interopRequireDefault(_gripVertical);

var _hammer = require('./lib/hammer');

var _hammer2 = _interopRequireDefault(_hammer);

var _handMetal = require('./lib/hand-metal');

var _handMetal2 = _interopRequireDefault(_handMetal);

var _hand = require('./lib/hand');

var _hand2 = _interopRequireDefault(_hand);

var _hardDrive = require('./lib/hard-drive');

var _hardDrive2 = _interopRequireDefault(_hardDrive);

var _hardHat = require('./lib/hard-hat');

var _hardHat2 = _interopRequireDefault(_hardHat);

var _hash = require('./lib/hash');

var _hash2 = _interopRequireDefault(_hash);

var _haze = require('./lib/haze');

var _haze2 = _interopRequireDefault(_haze);

var _headphones = require('./lib/headphones');

var _headphones2 = _interopRequireDefault(_headphones);

var _heart = require('./lib/heart');

var _heart2 = _interopRequireDefault(_heart);

var _helpCircle = require('./lib/help-circle');

var _helpCircle2 = _interopRequireDefault(_helpCircle);

var _hexagon = require('./lib/hexagon');

var _hexagon2 = _interopRequireDefault(_hexagon);

var _highlighter = require('./lib/highlighter');

var _highlighter2 = _interopRequireDefault(_highlighter);

var _history = require('./lib/history');

var _history2 = _interopRequireDefault(_history);

var _home = require('./lib/home');

var _home2 = _interopRequireDefault(_home);

var _imageMinus = require('./lib/image-minus');

var _imageMinus2 = _interopRequireDefault(_imageMinus);

var _imageOff = require('./lib/image-off');

var _imageOff2 = _interopRequireDefault(_imageOff);

var _imagePlus = require('./lib/image-plus');

var _imagePlus2 = _interopRequireDefault(_imagePlus);

var _image = require('./lib/image');

var _image2 = _interopRequireDefault(_image);

var _import = require('./lib/import');

var _import2 = _interopRequireDefault(_import);

var _inbox = require('./lib/inbox');

var _inbox2 = _interopRequireDefault(_inbox);

var _indent = require('./lib/indent');

var _indent2 = _interopRequireDefault(_indent);

var _indianRupee = require('./lib/indian-rupee');

var _indianRupee2 = _interopRequireDefault(_indianRupee);

var _infinity = require('./lib/infinity');

var _infinity2 = _interopRequireDefault(_infinity);

var _info = require('./lib/info');

var _info2 = _interopRequireDefault(_info);

var _inspect = require('./lib/inspect');

var _inspect2 = _interopRequireDefault(_inspect);

var _instagram = require('./lib/instagram');

var _instagram2 = _interopRequireDefault(_instagram);

var _italic = require('./lib/italic');

var _italic2 = _interopRequireDefault(_italic);

var _japaneseYen = require('./lib/japanese-yen');

var _japaneseYen2 = _interopRequireDefault(_japaneseYen);

var _key = require('./lib/key');

var _key2 = _interopRequireDefault(_key);

var _landmark = require('./lib/landmark');

var _landmark2 = _interopRequireDefault(_landmark);

var _languages = require('./lib/languages');

var _languages2 = _interopRequireDefault(_languages);

var _laptop = require('./lib/laptop-2');

var _laptop2 = _interopRequireDefault(_laptop);

var _laptop3 = require('./lib/laptop');

var _laptop4 = _interopRequireDefault(_laptop3);

var _lassoSelect = require('./lib/lasso-select');

var _lassoSelect2 = _interopRequireDefault(_lassoSelect);

var _lasso = require('./lib/lasso');

var _lasso2 = _interopRequireDefault(_lasso);

var _layers = require('./lib/layers');

var _layers2 = _interopRequireDefault(_layers);

var _layoutDashboard = require('./lib/layout-dashboard');

var _layoutDashboard2 = _interopRequireDefault(_layoutDashboard);

var _layoutGrid = require('./lib/layout-grid');

var _layoutGrid2 = _interopRequireDefault(_layoutGrid);

var _layoutList = require('./lib/layout-list');

var _layoutList2 = _interopRequireDefault(_layoutList);

var _layoutTemplate = require('./lib/layout-template');

var _layoutTemplate2 = _interopRequireDefault(_layoutTemplate);

var _layout = require('./lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _library = require('./lib/library');

var _library2 = _interopRequireDefault(_library);

var _lifeBuoy = require('./lib/life-buoy');

var _lifeBuoy2 = _interopRequireDefault(_lifeBuoy);

var _lightbulbOff = require('./lib/lightbulb-off');

var _lightbulbOff2 = _interopRequireDefault(_lightbulbOff);

var _lightbulb = require('./lib/lightbulb');

var _lightbulb2 = _interopRequireDefault(_lightbulb);

var _link2Off = require('./lib/link-2-off');

var _link2Off2 = _interopRequireDefault(_link2Off);

var _link = require('./lib/link-2');

var _link2 = _interopRequireDefault(_link);

var _link3 = require('./lib/link');

var _link4 = _interopRequireDefault(_link3);

var _linkedin = require('./lib/linkedin');

var _linkedin2 = _interopRequireDefault(_linkedin);

var _listChecks = require('./lib/list-checks');

var _listChecks2 = _interopRequireDefault(_listChecks);

var _listMinus = require('./lib/list-minus');

var _listMinus2 = _interopRequireDefault(_listMinus);

var _listOrdered = require('./lib/list-ordered');

var _listOrdered2 = _interopRequireDefault(_listOrdered);

var _listPlus = require('./lib/list-plus');

var _listPlus2 = _interopRequireDefault(_listPlus);

var _listX = require('./lib/list-x');

var _listX2 = _interopRequireDefault(_listX);

var _list = require('./lib/list');

var _list2 = _interopRequireDefault(_list);

var _loader = require('./lib/loader-2');

var _loader2 = _interopRequireDefault(_loader);

var _loader3 = require('./lib/loader');

var _loader4 = _interopRequireDefault(_loader3);

var _locateFixed = require('./lib/locate-fixed');

var _locateFixed2 = _interopRequireDefault(_locateFixed);

var _locate = require('./lib/locate');

var _locate2 = _interopRequireDefault(_locate);

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

var _megaphone = require('./lib/megaphone');

var _megaphone2 = _interopRequireDefault(_megaphone);

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

var _monitorOff = require('./lib/monitor-off');

var _monitorOff2 = _interopRequireDefault(_monitorOff);

var _monitorSpeaker = require('./lib/monitor-speaker');

var _monitorSpeaker2 = _interopRequireDefault(_monitorSpeaker);

var _monitor = require('./lib/monitor');

var _monitor2 = _interopRequireDefault(_monitor);

var _moon = require('./lib/moon');

var _moon2 = _interopRequireDefault(_moon);

var _moreHorizontal = require('./lib/more-horizontal');

var _moreHorizontal2 = _interopRequireDefault(_moreHorizontal);

var _moreVertical = require('./lib/more-vertical');

var _moreVertical2 = _interopRequireDefault(_moreVertical);

var _mountainSnow = require('./lib/mountain-snow');

var _mountainSnow2 = _interopRequireDefault(_mountainSnow);

var _mountain = require('./lib/mountain');

var _mountain2 = _interopRequireDefault(_mountain);

var _mousePointer = require('./lib/mouse-pointer-2');

var _mousePointer2 = _interopRequireDefault(_mousePointer);

var _mousePointerClick = require('./lib/mouse-pointer-click');

var _mousePointerClick2 = _interopRequireDefault(_mousePointerClick);

var _mousePointer3 = require('./lib/mouse-pointer');

var _mousePointer4 = _interopRequireDefault(_mousePointer3);

var _moveDiagonal = require('./lib/move-diagonal-2');

var _moveDiagonal2 = _interopRequireDefault(_moveDiagonal);

var _moveDiagonal3 = require('./lib/move-diagonal');

var _moveDiagonal4 = _interopRequireDefault(_moveDiagonal3);

var _moveHorizontal = require('./lib/move-horizontal');

var _moveHorizontal2 = _interopRequireDefault(_moveHorizontal);

var _moveVertical = require('./lib/move-vertical');

var _moveVertical2 = _interopRequireDefault(_moveVertical);

var _move = require('./lib/move');

var _move2 = _interopRequireDefault(_move);

var _music = require('./lib/music');

var _music2 = _interopRequireDefault(_music);

var _navigation = require('./lib/navigation-2');

var _navigation2 = _interopRequireDefault(_navigation);

var _navigation3 = require('./lib/navigation');

var _navigation4 = _interopRequireDefault(_navigation3);

var _network = require('./lib/network');

var _network2 = _interopRequireDefault(_network);

var _octagon = require('./lib/octagon');

var _octagon2 = _interopRequireDefault(_octagon);

var _option = require('./lib/option');

var _option2 = _interopRequireDefault(_option);

var _outdent = require('./lib/outdent');

var _outdent2 = _interopRequireDefault(_outdent);

var _packageCheck = require('./lib/package-check');

var _packageCheck2 = _interopRequireDefault(_packageCheck);

var _packageMinus = require('./lib/package-minus');

var _packageMinus2 = _interopRequireDefault(_packageMinus);

var _packagePlus = require('./lib/package-plus');

var _packagePlus2 = _interopRequireDefault(_packagePlus);

var _packageSearch = require('./lib/package-search');

var _packageSearch2 = _interopRequireDefault(_packageSearch);

var _packageX = require('./lib/package-x');

var _packageX2 = _interopRequireDefault(_packageX);

var _package = require('./lib/package');

var _package2 = _interopRequireDefault(_package);

var _palette = require('./lib/palette');

var _palette2 = _interopRequireDefault(_palette);

var _paperclip = require('./lib/paperclip');

var _paperclip2 = _interopRequireDefault(_paperclip);

var _pauseCircle = require('./lib/pause-circle');

var _pauseCircle2 = _interopRequireDefault(_pauseCircle);

var _pauseOctagon = require('./lib/pause-octagon');

var _pauseOctagon2 = _interopRequireDefault(_pauseOctagon);

var _pause = require('./lib/pause');

var _pause2 = _interopRequireDefault(_pause);

var _penTool = require('./lib/pen-tool');

var _penTool2 = _interopRequireDefault(_penTool);

var _pencil = require('./lib/pencil');

var _pencil2 = _interopRequireDefault(_pencil);

var _percent = require('./lib/percent');

var _percent2 = _interopRequireDefault(_percent);

var _personStanding = require('./lib/person-standing');

var _personStanding2 = _interopRequireDefault(_personStanding);

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

var _piggyBank = require('./lib/piggy-bank');

var _piggyBank2 = _interopRequireDefault(_piggyBank);

var _pin = require('./lib/pin');

var _pin2 = _interopRequireDefault(_pin);

var _pipette = require('./lib/pipette');

var _pipette2 = _interopRequireDefault(_pipette);

var _plane = require('./lib/plane');

var _plane2 = _interopRequireDefault(_plane);

var _playCircle = require('./lib/play-circle');

var _playCircle2 = _interopRequireDefault(_playCircle);

var _play = require('./lib/play');

var _play2 = _interopRequireDefault(_play);

var _plugZap = require('./lib/plug-zap');

var _plugZap2 = _interopRequireDefault(_plugZap);

var _plusCircle = require('./lib/plus-circle');

var _plusCircle2 = _interopRequireDefault(_plusCircle);

var _plusSquare = require('./lib/plus-square');

var _plusSquare2 = _interopRequireDefault(_plusSquare);

var _plus = require('./lib/plus');

var _plus2 = _interopRequireDefault(_plus);

var _pocket = require('./lib/pocket');

var _pocket2 = _interopRequireDefault(_pocket);

var _podcast = require('./lib/podcast');

var _podcast2 = _interopRequireDefault(_podcast);

var _pointer = require('./lib/pointer');

var _pointer2 = _interopRequireDefault(_pointer);

var _poundSterling = require('./lib/pound-sterling');

var _poundSterling2 = _interopRequireDefault(_poundSterling);

var _powerOff = require('./lib/power-off');

var _powerOff2 = _interopRequireDefault(_powerOff);

var _power = require('./lib/power');

var _power2 = _interopRequireDefault(_power);

var _printer = require('./lib/printer');

var _printer2 = _interopRequireDefault(_printer);

var _qrCode = require('./lib/qr-code');

var _qrCode2 = _interopRequireDefault(_qrCode);

var _quote = require('./lib/quote');

var _quote2 = _interopRequireDefault(_quote);

var _radioReceiver = require('./lib/radio-receiver');

var _radioReceiver2 = _interopRequireDefault(_radioReceiver);

var _radio = require('./lib/radio');

var _radio2 = _interopRequireDefault(_radio);

var _redo = require('./lib/redo');

var _redo2 = _interopRequireDefault(_redo);

var _refreshCcw = require('./lib/refresh-ccw');

var _refreshCcw2 = _interopRequireDefault(_refreshCcw);

var _refreshCw = require('./lib/refresh-cw');

var _refreshCw2 = _interopRequireDefault(_refreshCw);

var _regex = require('./lib/regex');

var _regex2 = _interopRequireDefault(_regex);

var _repeat = require('./lib/repeat-1');

var _repeat2 = _interopRequireDefault(_repeat);

var _repeat3 = require('./lib/repeat');

var _repeat4 = _interopRequireDefault(_repeat3);

var _replyAll = require('./lib/reply-all');

var _replyAll2 = _interopRequireDefault(_replyAll);

var _reply = require('./lib/reply');

var _reply2 = _interopRequireDefault(_reply);

var _rewind = require('./lib/rewind');

var _rewind2 = _interopRequireDefault(_rewind);

var _rockingChair = require('./lib/rocking-chair');

var _rockingChair2 = _interopRequireDefault(_rockingChair);

var _rotateCcw = require('./lib/rotate-ccw');

var _rotateCcw2 = _interopRequireDefault(_rotateCcw);

var _rotateCw = require('./lib/rotate-cw');

var _rotateCw2 = _interopRequireDefault(_rotateCw);

var _rss = require('./lib/rss');

var _rss2 = _interopRequireDefault(_rss);

var _ruler = require('./lib/ruler');

var _ruler2 = _interopRequireDefault(_ruler);

var _russianRuble = require('./lib/russian-ruble');

var _russianRuble2 = _interopRequireDefault(_russianRuble);

var _save = require('./lib/save');

var _save2 = _interopRequireDefault(_save);

var _scale = require('./lib/scale');

var _scale2 = _interopRequireDefault(_scale);

var _scanLine = require('./lib/scan-line');

var _scanLine2 = _interopRequireDefault(_scanLine);

var _scan = require('./lib/scan');

var _scan2 = _interopRequireDefault(_scan);

var _scissors = require('./lib/scissors');

var _scissors2 = _interopRequireDefault(_scissors);

var _screenShareOff = require('./lib/screen-share-off');

var _screenShareOff2 = _interopRequireDefault(_screenShareOff);

var _screenShare = require('./lib/screen-share');

var _screenShare2 = _interopRequireDefault(_screenShare);

var _search = require('./lib/search');

var _search2 = _interopRequireDefault(_search);

var _send = require('./lib/send');

var _send2 = _interopRequireDefault(_send);

var _separatorHorizontal = require('./lib/separator-horizontal');

var _separatorHorizontal2 = _interopRequireDefault(_separatorHorizontal);

var _separatorVertical = require('./lib/separator-vertical');

var _separatorVertical2 = _interopRequireDefault(_separatorVertical);

var _serverCrash = require('./lib/server-crash');

var _serverCrash2 = _interopRequireDefault(_serverCrash);

var _serverOff = require('./lib/server-off');

var _serverOff2 = _interopRequireDefault(_serverOff);

var _server = require('./lib/server');

var _server2 = _interopRequireDefault(_server);

var _settings = require('./lib/settings-2');

var _settings2 = _interopRequireDefault(_settings);

var _settings3 = require('./lib/settings');

var _settings4 = _interopRequireDefault(_settings3);

var _share = require('./lib/share-2');

var _share2 = _interopRequireDefault(_share);

var _share3 = require('./lib/share');

var _share4 = _interopRequireDefault(_share3);

var _sheet = require('./lib/sheet');

var _sheet2 = _interopRequireDefault(_sheet);

var _shieldAlert = require('./lib/shield-alert');

var _shieldAlert2 = _interopRequireDefault(_shieldAlert);

var _shieldCheck = require('./lib/shield-check');

var _shieldCheck2 = _interopRequireDefault(_shieldCheck);

var _shieldClose = require('./lib/shield-close');

var _shieldClose2 = _interopRequireDefault(_shieldClose);

var _shieldOff = require('./lib/shield-off');

var _shieldOff2 = _interopRequireDefault(_shieldOff);

var _shield = require('./lib/shield');

var _shield2 = _interopRequireDefault(_shield);

var _shirt = require('./lib/shirt');

var _shirt2 = _interopRequireDefault(_shirt);

var _shoppingBag = require('./lib/shopping-bag');

var _shoppingBag2 = _interopRequireDefault(_shoppingBag);

var _shoppingCart = require('./lib/shopping-cart');

var _shoppingCart2 = _interopRequireDefault(_shoppingCart);

var _shovel = require('./lib/shovel');

var _shovel2 = _interopRequireDefault(_shovel);

var _shrink = require('./lib/shrink');

var _shrink2 = _interopRequireDefault(_shrink);

var _shuffle = require('./lib/shuffle');

var _shuffle2 = _interopRequireDefault(_shuffle);

var _sidebarClose = require('./lib/sidebar-close');

var _sidebarClose2 = _interopRequireDefault(_sidebarClose);

var _sidebarOpen = require('./lib/sidebar-open');

var _sidebarOpen2 = _interopRequireDefault(_sidebarOpen);

var _sidebar = require('./lib/sidebar');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _sigma = require('./lib/sigma');

var _sigma2 = _interopRequireDefault(_sigma);

var _signalHigh = require('./lib/signal-high');

var _signalHigh2 = _interopRequireDefault(_signalHigh);

var _signalLow = require('./lib/signal-low');

var _signalLow2 = _interopRequireDefault(_signalLow);

var _signalMedium = require('./lib/signal-medium');

var _signalMedium2 = _interopRequireDefault(_signalMedium);

var _signalZero = require('./lib/signal-zero');

var _signalZero2 = _interopRequireDefault(_signalZero);

var _signal = require('./lib/signal');

var _signal2 = _interopRequireDefault(_signal);

var _skipBack = require('./lib/skip-back');

var _skipBack2 = _interopRequireDefault(_skipBack);

var _skipForward = require('./lib/skip-forward');

var _skipForward2 = _interopRequireDefault(_skipForward);

var _skull = require('./lib/skull');

var _skull2 = _interopRequireDefault(_skull);

var _slack = require('./lib/slack');

var _slack2 = _interopRequireDefault(_slack);

var _slash = require('./lib/slash');

var _slash2 = _interopRequireDefault(_slash);

var _sliders = require('./lib/sliders');

var _sliders2 = _interopRequireDefault(_sliders);

var _smartphoneCharging = require('./lib/smartphone-charging');

var _smartphoneCharging2 = _interopRequireDefault(_smartphoneCharging);

var _smartphone = require('./lib/smartphone');

var _smartphone2 = _interopRequireDefault(_smartphone);

var _smile = require('./lib/smile');

var _smile2 = _interopRequireDefault(_smile);

var _snowflake = require('./lib/snowflake');

var _snowflake2 = _interopRequireDefault(_snowflake);

var _sortAsc = require('./lib/sort-asc');

var _sortAsc2 = _interopRequireDefault(_sortAsc);

var _sortDesc = require('./lib/sort-desc');

var _sortDesc2 = _interopRequireDefault(_sortDesc);

var _speaker = require('./lib/speaker');

var _speaker2 = _interopRequireDefault(_speaker);

var _sprout = require('./lib/sprout');

var _sprout2 = _interopRequireDefault(_sprout);

var _square = require('./lib/square');

var _square2 = _interopRequireDefault(_square);

var _starHalf = require('./lib/star-half');

var _starHalf2 = _interopRequireDefault(_starHalf);

var _star = require('./lib/star');

var _star2 = _interopRequireDefault(_star);

var _stopCircle = require('./lib/stop-circle');

var _stopCircle2 = _interopRequireDefault(_stopCircle);

var _strikethrough = require('./lib/strikethrough');

var _strikethrough2 = _interopRequireDefault(_strikethrough);

var _subscript = require('./lib/subscript');

var _subscript2 = _interopRequireDefault(_subscript);

var _sun = require('./lib/sun');

var _sun2 = _interopRequireDefault(_sun);

var _sunrise = require('./lib/sunrise');

var _sunrise2 = _interopRequireDefault(_sunrise);

var _sunset = require('./lib/sunset');

var _sunset2 = _interopRequireDefault(_sunset);

var _superscript = require('./lib/superscript');

var _superscript2 = _interopRequireDefault(_superscript);

var _swissFranc = require('./lib/swiss-franc');

var _swissFranc2 = _interopRequireDefault(_swissFranc);

var _switchCamera = require('./lib/switch-camera');

var _switchCamera2 = _interopRequireDefault(_switchCamera);

var _table = require('./lib/table');

var _table2 = _interopRequireDefault(_table);

var _tablet = require('./lib/tablet');

var _tablet2 = _interopRequireDefault(_tablet);

var _tag = require('./lib/tag');

var _tag2 = _interopRequireDefault(_tag);

var _target = require('./lib/target');

var _target2 = _interopRequireDefault(_target);

var _tent = require('./lib/tent');

var _tent2 = _interopRequireDefault(_tent);

var _terminalSquare = require('./lib/terminal-square');

var _terminalSquare2 = _interopRequireDefault(_terminalSquare);

var _terminal = require('./lib/terminal');

var _terminal2 = _interopRequireDefault(_terminal);

var _textCursorInput = require('./lib/text-cursor-input');

var _textCursorInput2 = _interopRequireDefault(_textCursorInput);

var _textCursor = require('./lib/text-cursor');

var _textCursor2 = _interopRequireDefault(_textCursor);

var _thermometerSnowflake = require('./lib/thermometer-snowflake');

var _thermometerSnowflake2 = _interopRequireDefault(_thermometerSnowflake);

var _thermometerSun = require('./lib/thermometer-sun');

var _thermometerSun2 = _interopRequireDefault(_thermometerSun);

var _thermometer = require('./lib/thermometer');

var _thermometer2 = _interopRequireDefault(_thermometer);

var _thumbsDown = require('./lib/thumbs-down');

var _thumbsDown2 = _interopRequireDefault(_thumbsDown);

var _thumbsUp = require('./lib/thumbs-up');

var _thumbsUp2 = _interopRequireDefault(_thumbsUp);

var _ticket = require('./lib/ticket');

var _ticket2 = _interopRequireDefault(_ticket);

var _timerOff = require('./lib/timer-off');

var _timerOff2 = _interopRequireDefault(_timerOff);

var _timerReset = require('./lib/timer-reset');

var _timerReset2 = _interopRequireDefault(_timerReset);

var _timer = require('./lib/timer');

var _timer2 = _interopRequireDefault(_timer);

var _toggleLeft = require('./lib/toggle-left');

var _toggleLeft2 = _interopRequireDefault(_toggleLeft);

var _toggleRight = require('./lib/toggle-right');

var _toggleRight2 = _interopRequireDefault(_toggleRight);

var _tornado = require('./lib/tornado');

var _tornado2 = _interopRequireDefault(_tornado);

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

var _tv = require('./lib/tv-2');

var _tv2 = _interopRequireDefault(_tv);

var _tv3 = require('./lib/tv');

var _tv4 = _interopRequireDefault(_tv3);

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

var _undo = require('./lib/undo');

var _undo2 = _interopRequireDefault(_undo);

var _unlink = require('./lib/unlink-2');

var _unlink2 = _interopRequireDefault(_unlink);

var _unlink3 = require('./lib/unlink');

var _unlink4 = _interopRequireDefault(_unlink3);

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

var _verified = require('./lib/verified');

var _verified2 = _interopRequireDefault(_verified);

var _vibrate = require('./lib/vibrate');

var _vibrate2 = _interopRequireDefault(_vibrate);

var _videoOff = require('./lib/video-off');

var _videoOff2 = _interopRequireDefault(_videoOff);

var _video = require('./lib/video');

var _video2 = _interopRequireDefault(_video);

var _view = require('./lib/view');

var _view2 = _interopRequireDefault(_view);

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

var _wallet = require('./lib/wallet');

var _wallet2 = _interopRequireDefault(_wallet);

var _wand = require('./lib/wand');

var _wand2 = _interopRequireDefault(_wand);

var _watch = require('./lib/watch');

var _watch2 = _interopRequireDefault(_watch);

var _webcam = require('./lib/webcam');

var _webcam2 = _interopRequireDefault(_webcam);

var _wifiOff = require('./lib/wifi-off');

var _wifiOff2 = _interopRequireDefault(_wifiOff);

var _wifi = require('./lib/wifi');

var _wifi2 = _interopRequireDefault(_wifi);

var _wind = require('./lib/wind');

var _wind2 = _interopRequireDefault(_wind);

var _wrapText = require('./lib/wrap-text');

var _wrapText2 = _interopRequireDefault(_wrapText);

var _wrench = require('./lib/wrench');

var _wrench2 = _interopRequireDefault(_wrench);

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
exports.AlarmCheck = _alarmCheck2.default;
exports.AlarmClockOff = _alarmClockOff2.default;
exports.AlarmClock = _alarmClock2.default;
exports.AlarmMinus = _alarmMinus2.default;
exports.AlarmPlus = _alarmPlus2.default;
exports.Album = _album2.default;
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
exports.ArrowBigDown = _arrowBigDown2.default;
exports.ArrowBigLeft = _arrowBigLeft2.default;
exports.ArrowBigRight = _arrowBigRight2.default;
exports.ArrowBigUp = _arrowBigUp2.default;
exports.ArrowDownCircle = _arrowDownCircle2.default;
exports.ArrowDownLeft = _arrowDownLeft2.default;
exports.ArrowDownRight = _arrowDownRight2.default;
exports.ArrowDown = _arrowDown2.default;
exports.ArrowLeftCircle = _arrowLeftCircle2.default;
exports.ArrowLeftRight = _arrowLeftRight2.default;
exports.ArrowLeft = _arrowLeft2.default;
exports.ArrowRightCircle = _arrowRightCircle2.default;
exports.ArrowRight = _arrowRight2.default;
exports.ArrowUpCircle = _arrowUpCircle2.default;
exports.ArrowUpLeft = _arrowUpLeft2.default;
exports.ArrowUpRight = _arrowUpRight2.default;
exports.ArrowUp = _arrowUp2.default;
exports.Asterisk = _asterisk2.default;
exports.AtSign = _atSign2.default;
exports.Award = _award2.default;
exports.Axe = _axe2.default;
exports.Banknote = _banknote2.default;
exports.BarChart2 = _barChart2.default;
exports.BarChart = _barChart4.default;
exports.BatteryCharging = _batteryCharging2.default;
exports.BatteryFull = _batteryFull2.default;
exports.BatteryLow = _batteryLow2.default;
exports.BatteryMedium = _batteryMedium2.default;
exports.Battery = _battery2.default;
exports.Beaker = _beaker2.default;
exports.BellMinus = _bellMinus2.default;
exports.BellOff = _bellOff2.default;
exports.BellPlus = _bellPlus2.default;
exports.BellRing = _bellRing2.default;
exports.Bell = _bell2.default;
exports.Bike = _bike2.default;
exports.Binary = _binary2.default;
exports.Bitcoin = _bitcoin2.default;
exports.BluetoothConnected = _bluetoothConnected2.default;
exports.BluetoothOff = _bluetoothOff2.default;
exports.BluetoothSearching = _bluetoothSearching2.default;
exports.Bluetooth = _bluetooth2.default;
exports.Bold = _bold2.default;
exports.BookOpen = _bookOpen2.default;
exports.Book = _book2.default;
exports.BookmarkMinus = _bookmarkMinus2.default;
exports.BookmarkPlus = _bookmarkPlus2.default;
exports.Bookmark = _bookmark2.default;
exports.Bot = _bot2.default;
exports.BoxSelect = _boxSelect2.default;
exports.Box = _box2.default;
exports.Briefcase = _briefcase2.default;
exports.Brush = _brush2.default;
exports.Bug = _bug2.default;
exports.Building = _building2.default;
exports.Bus = _bus2.default;
exports.Calculator = _calculator2.default;
exports.Calendar = _calendar2.default;
exports.CameraOff = _cameraOff2.default;
exports.Camera = _camera2.default;
exports.Car = _car2.default;
exports.Carrot = _carrot2.default;
exports.Cast = _cast2.default;
exports.CheckCircle2 = _checkCircle2.default;
exports.CheckCircle = _checkCircle4.default;
exports.CheckSquare = _checkSquare2.default;
exports.Check = _check2.default;
exports.ChevronDown = _chevronDown2.default;
exports.ChevronFirst = _chevronFirst2.default;
exports.ChevronLast = _chevronLast2.default;
exports.ChevronLeft = _chevronLeft2.default;
exports.ChevronRight = _chevronRight2.default;
exports.ChevronUp = _chevronUp2.default;
exports.ChevronsDownUp = _chevronsDownUp2.default;
exports.ChevronsDown = _chevronsDown2.default;
exports.ChevronsLeft = _chevronsLeft2.default;
exports.ChevronsRight = _chevronsRight2.default;
exports.ChevronsUpDown = _chevronsUpDown2.default;
exports.ChevronsUp = _chevronsUp2.default;
exports.Chrome = _chrome2.default;
exports.CircleSlashed = _circleSlashed2.default;
exports.Circle = _circle2.default;
exports.ClipboardCheck = _clipboardCheck2.default;
exports.ClipboardCopy = _clipboardCopy2.default;
exports.ClipboardList = _clipboardList2.default;
exports.ClipboardX = _clipboardX2.default;
exports.Clipboard = _clipboard2.default;
exports.Clock1 = _clock2.default;
exports.Clock10 = _clock4.default;
exports.Clock11 = _clock6.default;
exports.Clock12 = _clock8.default;
exports.Clock2 = _clock10.default;
exports.Clock3 = _clock12.default;
exports.Clock4 = _clock14.default;
exports.Clock5 = _clock16.default;
exports.Clock6 = _clock18.default;
exports.Clock7 = _clock20.default;
exports.Clock8 = _clock22.default;
exports.Clock9 = _clock24.default;
exports.Clock = _clock26.default;
exports.CloudDrizzle = _cloudDrizzle2.default;
exports.CloudFog = _cloudFog2.default;
exports.CloudHail = _cloudHail2.default;
exports.CloudLightning = _cloudLightning2.default;
exports.CloudMoon = _cloudMoon2.default;
exports.CloudOff = _cloudOff2.default;
exports.CloudRainWind = _cloudRainWind2.default;
exports.CloudRain = _cloudRain2.default;
exports.CloudSnow = _cloudSnow2.default;
exports.CloudSun = _cloudSun2.default;
exports.Cloud = _cloud2.default;
exports.Cloudy = _cloudy2.default;
exports.Clover = _clover2.default;
exports.Code2 = _code2.default;
exports.Code = _code4.default;
exports.Codepen = _codepen2.default;
exports.Codesandbox = _codesandbox2.default;
exports.Coffee = _coffee2.default;
exports.Coins = _coins2.default;
exports.Columns = _columns2.default;
exports.Command = _command2.default;
exports.Compass = _compass2.default;
exports.Contact = _contact2.default;
exports.Contrast = _contrast2.default;
exports.Copy = _copy2.default;
exports.Copyleft = _copyleft2.default;
exports.Copyright = _copyright2.default;
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
exports.Cross = _cross2.default;
exports.Crosshair = _crosshair2.default;
exports.Crown = _crown2.default;
exports.Currency = _currency2.default;
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
exports.Droplets = _droplets2.default;
exports.Drumstick = _drumstick2.default;
exports.Edit2 = _edit2.default;
exports.Edit3 = _edit4.default;
exports.Edit = _edit6.default;
exports.Egg = _egg2.default;
exports.EqualNot = _equalNot2.default;
exports.Equal = _equal2.default;
exports.Euro = _euro2.default;
exports.Expand = _expand2.default;
exports.ExternalLink = _externalLink2.default;
exports.EyeOff = _eyeOff2.default;
exports.Eye = _eye2.default;
exports.Facebook = _facebook2.default;
exports.FastForward = _fastForward2.default;
exports.Feather = _feather2.default;
exports.Figma = _figma2.default;
exports.FileCheck2 = _fileCheck2.default;
exports.FileCheck = _fileCheck4.default;
exports.FileCode = _fileCode2.default;
exports.FileDigit = _fileDigit2.default;
exports.FileInput = _fileInput2.default;
exports.FileMinus2 = _fileMinus2.default;
exports.FileMinus = _fileMinus4.default;
exports.FileOutput = _fileOutput2.default;
exports.FilePlus2 = _filePlus2.default;
exports.FilePlus = _filePlus4.default;
exports.FileSearch = _fileSearch2.default;
exports.FileText = _fileText2.default;
exports.FileX2 = _fileX2.default;
exports.FileX = _fileX4.default;
exports.File = _file2.default;
exports.Files = _files2.default;
exports.Film = _film2.default;
exports.Filter = _filter2.default;
exports.FlagTriangleLeft = _flagTriangleLeft2.default;
exports.FlagTriangleRight = _flagTriangleRight2.default;
exports.Flag = _flag2.default;
exports.Flame = _flame2.default;
exports.FlashlightOff = _flashlightOff2.default;
exports.Flashlight = _flashlight2.default;
exports.FlaskConical = _flaskConical2.default;
exports.FlaskRound = _flaskRound2.default;
exports.FolderMinus = _folderMinus2.default;
exports.FolderOpen = _folderOpen2.default;
exports.FolderPlus = _folderPlus2.default;
exports.Folder = _folder2.default;
exports.FormInput = _formInput2.default;
exports.Forward = _forward2.default;
exports.Framer = _framer2.default;
exports.Frown = _frown2.default;
exports.FunctionSquare = _functionSquare2.default;
exports.Gamepad2 = _gamepad2.default;
exports.Gamepad = _gamepad4.default;
exports.Gauge = _gauge2.default;
exports.Gavel = _gavel2.default;
exports.Gem = _gem2.default;
exports.Ghost = _ghost2.default;
exports.Gift = _gift2.default;
exports.GitBranchPlus = _gitBranchPlus2.default;
exports.GitBranch = _gitBranch2.default;
exports.GitCommit = _gitCommit2.default;
exports.GitMerge = _gitMerge2.default;
exports.GitPullRequest = _gitPullRequest2.default;
exports.Github = _github2.default;
exports.Gitlab = _gitlab2.default;
exports.Glasses = _glasses2.default;
exports.Globe2 = _globe2.default;
exports.Globe = _globe4.default;
exports.Grab = _grab2.default;
exports.GraduationCap = _graduationCap2.default;
exports.Grid = _grid2.default;
exports.GripHorizontal = _gripHorizontal2.default;
exports.GripVertical = _gripVertical2.default;
exports.Hammer = _hammer2.default;
exports.HandMetal = _handMetal2.default;
exports.Hand = _hand2.default;
exports.HardDrive = _hardDrive2.default;
exports.HardHat = _hardHat2.default;
exports.Hash = _hash2.default;
exports.Haze = _haze2.default;
exports.Headphones = _headphones2.default;
exports.Heart = _heart2.default;
exports.HelpCircle = _helpCircle2.default;
exports.Hexagon = _hexagon2.default;
exports.Highlighter = _highlighter2.default;
exports.History = _history2.default;
exports.Home = _home2.default;
exports.ImageMinus = _imageMinus2.default;
exports.ImageOff = _imageOff2.default;
exports.ImagePlus = _imagePlus2.default;
exports.Image = _image2.default;
exports.Import = _import2.default;
exports.Inbox = _inbox2.default;
exports.Indent = _indent2.default;
exports.IndianRupee = _indianRupee2.default;
exports.Infinity = _infinity2.default;
exports.Info = _info2.default;
exports.Inspect = _inspect2.default;
exports.Instagram = _instagram2.default;
exports.Italic = _italic2.default;
exports.JapaneseYen = _japaneseYen2.default;
exports.Key = _key2.default;
exports.Landmark = _landmark2.default;
exports.Languages = _languages2.default;
exports.Laptop2 = _laptop2.default;
exports.Laptop = _laptop4.default;
exports.LassoSelect = _lassoSelect2.default;
exports.Lasso = _lasso2.default;
exports.Layers = _layers2.default;
exports.LayoutDashboard = _layoutDashboard2.default;
exports.LayoutGrid = _layoutGrid2.default;
exports.LayoutList = _layoutList2.default;
exports.LayoutTemplate = _layoutTemplate2.default;
exports.Layout = _layout2.default;
exports.Library = _library2.default;
exports.LifeBuoy = _lifeBuoy2.default;
exports.LightbulbOff = _lightbulbOff2.default;
exports.Lightbulb = _lightbulb2.default;
exports.Link2Off = _link2Off2.default;
exports.Link2 = _link2.default;
exports.Link = _link4.default;
exports.Linkedin = _linkedin2.default;
exports.ListChecks = _listChecks2.default;
exports.ListMinus = _listMinus2.default;
exports.ListOrdered = _listOrdered2.default;
exports.ListPlus = _listPlus2.default;
exports.ListX = _listX2.default;
exports.List = _list2.default;
exports.Loader2 = _loader2.default;
exports.Loader = _loader4.default;
exports.LocateFixed = _locateFixed2.default;
exports.Locate = _locate2.default;
exports.Lock = _lock2.default;
exports.LogIn = _logIn2.default;
exports.LogOut = _logOut2.default;
exports.Mail = _mail2.default;
exports.MapPin = _mapPin2.default;
exports.Map = _map2.default;
exports.Maximize2 = _maximize2.default;
exports.Maximize = _maximize4.default;
exports.Megaphone = _megaphone2.default;
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
exports.MonitorOff = _monitorOff2.default;
exports.MonitorSpeaker = _monitorSpeaker2.default;
exports.Monitor = _monitor2.default;
exports.Moon = _moon2.default;
exports.MoreHorizontal = _moreHorizontal2.default;
exports.MoreVertical = _moreVertical2.default;
exports.MountainSnow = _mountainSnow2.default;
exports.Mountain = _mountain2.default;
exports.MousePointer2 = _mousePointer2.default;
exports.MousePointerClick = _mousePointerClick2.default;
exports.MousePointer = _mousePointer4.default;
exports.MoveDiagonal2 = _moveDiagonal2.default;
exports.MoveDiagonal = _moveDiagonal4.default;
exports.MoveHorizontal = _moveHorizontal2.default;
exports.MoveVertical = _moveVertical2.default;
exports.Move = _move2.default;
exports.Music = _music2.default;
exports.Navigation2 = _navigation2.default;
exports.Navigation = _navigation4.default;
exports.Network = _network2.default;
exports.Octagon = _octagon2.default;
exports.Option = _option2.default;
exports.Outdent = _outdent2.default;
exports.PackageCheck = _packageCheck2.default;
exports.PackageMinus = _packageMinus2.default;
exports.PackagePlus = _packagePlus2.default;
exports.PackageSearch = _packageSearch2.default;
exports.PackageX = _packageX2.default;
exports.Package = _package2.default;
exports.Palette = _palette2.default;
exports.Paperclip = _paperclip2.default;
exports.PauseCircle = _pauseCircle2.default;
exports.PauseOctagon = _pauseOctagon2.default;
exports.Pause = _pause2.default;
exports.PenTool = _penTool2.default;
exports.Pencil = _pencil2.default;
exports.Percent = _percent2.default;
exports.PersonStanding = _personStanding2.default;
exports.PhoneCall = _phoneCall2.default;
exports.PhoneForwarded = _phoneForwarded2.default;
exports.PhoneIncoming = _phoneIncoming2.default;
exports.PhoneMissed = _phoneMissed2.default;
exports.PhoneOff = _phoneOff2.default;
exports.PhoneOutgoing = _phoneOutgoing2.default;
exports.Phone = _phone2.default;
exports.PieChart = _pieChart2.default;
exports.PiggyBank = _piggyBank2.default;
exports.Pin = _pin2.default;
exports.Pipette = _pipette2.default;
exports.Plane = _plane2.default;
exports.PlayCircle = _playCircle2.default;
exports.Play = _play2.default;
exports.PlugZap = _plugZap2.default;
exports.PlusCircle = _plusCircle2.default;
exports.PlusSquare = _plusSquare2.default;
exports.Plus = _plus2.default;
exports.Pocket = _pocket2.default;
exports.Podcast = _podcast2.default;
exports.Pointer = _pointer2.default;
exports.PoundSterling = _poundSterling2.default;
exports.PowerOff = _powerOff2.default;
exports.Power = _power2.default;
exports.Printer = _printer2.default;
exports.QrCode = _qrCode2.default;
exports.Quote = _quote2.default;
exports.RadioReceiver = _radioReceiver2.default;
exports.Radio = _radio2.default;
exports.Redo = _redo2.default;
exports.RefreshCcw = _refreshCcw2.default;
exports.RefreshCw = _refreshCw2.default;
exports.Regex = _regex2.default;
exports.Repeat1 = _repeat2.default;
exports.Repeat = _repeat4.default;
exports.ReplyAll = _replyAll2.default;
exports.Reply = _reply2.default;
exports.Rewind = _rewind2.default;
exports.RockingChair = _rockingChair2.default;
exports.RotateCcw = _rotateCcw2.default;
exports.RotateCw = _rotateCw2.default;
exports.Rss = _rss2.default;
exports.Ruler = _ruler2.default;
exports.RussianRuble = _russianRuble2.default;
exports.Save = _save2.default;
exports.Scale = _scale2.default;
exports.ScanLine = _scanLine2.default;
exports.Scan = _scan2.default;
exports.Scissors = _scissors2.default;
exports.ScreenShareOff = _screenShareOff2.default;
exports.ScreenShare = _screenShare2.default;
exports.Search = _search2.default;
exports.Send = _send2.default;
exports.SeparatorHorizontal = _separatorHorizontal2.default;
exports.SeparatorVertical = _separatorVertical2.default;
exports.ServerCrash = _serverCrash2.default;
exports.ServerOff = _serverOff2.default;
exports.Server = _server2.default;
exports.Settings2 = _settings2.default;
exports.Settings = _settings4.default;
exports.Share2 = _share2.default;
exports.Share = _share4.default;
exports.Sheet = _sheet2.default;
exports.ShieldAlert = _shieldAlert2.default;
exports.ShieldCheck = _shieldCheck2.default;
exports.ShieldClose = _shieldClose2.default;
exports.ShieldOff = _shieldOff2.default;
exports.Shield = _shield2.default;
exports.Shirt = _shirt2.default;
exports.ShoppingBag = _shoppingBag2.default;
exports.ShoppingCart = _shoppingCart2.default;
exports.Shovel = _shovel2.default;
exports.Shrink = _shrink2.default;
exports.Shuffle = _shuffle2.default;
exports.SidebarClose = _sidebarClose2.default;
exports.SidebarOpen = _sidebarOpen2.default;
exports.Sidebar = _sidebar2.default;
exports.Sigma = _sigma2.default;
exports.SignalHigh = _signalHigh2.default;
exports.SignalLow = _signalLow2.default;
exports.SignalMedium = _signalMedium2.default;
exports.SignalZero = _signalZero2.default;
exports.Signal = _signal2.default;
exports.SkipBack = _skipBack2.default;
exports.SkipForward = _skipForward2.default;
exports.Skull = _skull2.default;
exports.Slack = _slack2.default;
exports.Slash = _slash2.default;
exports.Sliders = _sliders2.default;
exports.SmartphoneCharging = _smartphoneCharging2.default;
exports.Smartphone = _smartphone2.default;
exports.Smile = _smile2.default;
exports.Snowflake = _snowflake2.default;
exports.SortAsc = _sortAsc2.default;
exports.SortDesc = _sortDesc2.default;
exports.Speaker = _speaker2.default;
exports.Sprout = _sprout2.default;
exports.Square = _square2.default;
exports.StarHalf = _starHalf2.default;
exports.Star = _star2.default;
exports.StopCircle = _stopCircle2.default;
exports.Strikethrough = _strikethrough2.default;
exports.Subscript = _subscript2.default;
exports.Sun = _sun2.default;
exports.Sunrise = _sunrise2.default;
exports.Sunset = _sunset2.default;
exports.Superscript = _superscript2.default;
exports.SwissFranc = _swissFranc2.default;
exports.SwitchCamera = _switchCamera2.default;
exports.Table = _table2.default;
exports.Tablet = _tablet2.default;
exports.Tag = _tag2.default;
exports.Target = _target2.default;
exports.Tent = _tent2.default;
exports.TerminalSquare = _terminalSquare2.default;
exports.Terminal = _terminal2.default;
exports.TextCursorInput = _textCursorInput2.default;
exports.TextCursor = _textCursor2.default;
exports.ThermometerSnowflake = _thermometerSnowflake2.default;
exports.ThermometerSun = _thermometerSun2.default;
exports.Thermometer = _thermometer2.default;
exports.ThumbsDown = _thumbsDown2.default;
exports.ThumbsUp = _thumbsUp2.default;
exports.Ticket = _ticket2.default;
exports.TimerOff = _timerOff2.default;
exports.TimerReset = _timerReset2.default;
exports.Timer = _timer2.default;
exports.ToggleLeft = _toggleLeft2.default;
exports.ToggleRight = _toggleRight2.default;
exports.Tornado = _tornado2.default;
exports.Trash2 = _trash2.default;
exports.Trash = _trash4.default;
exports.Trello = _trello2.default;
exports.TrendingDown = _trendingDown2.default;
exports.TrendingUp = _trendingUp2.default;
exports.Triangle = _triangle2.default;
exports.Truck = _truck2.default;
exports.Tv2 = _tv2.default;
exports.Tv = _tv4.default;
exports.Twitch = _twitch2.default;
exports.Twitter = _twitter2.default;
exports.Type = _type2.default;
exports.Umbrella = _umbrella2.default;
exports.Underline = _underline2.default;
exports.Undo = _undo2.default;
exports.Unlink2 = _unlink2.default;
exports.Unlink = _unlink4.default;
exports.Unlock = _unlock2.default;
exports.UploadCloud = _uploadCloud2.default;
exports.Upload = _upload2.default;
exports.UserCheck = _userCheck2.default;
exports.UserMinus = _userMinus2.default;
exports.UserPlus = _userPlus2.default;
exports.UserX = _userX2.default;
exports.User = _user2.default;
exports.Users = _users2.default;
exports.Verified = _verified2.default;
exports.Vibrate = _vibrate2.default;
exports.VideoOff = _videoOff2.default;
exports.Video = _video2.default;
exports.View = _view2.default;
exports.Voicemail = _voicemail2.default;
exports.Volume1 = _volume2.default;
exports.Volume2 = _volume4.default;
exports.VolumeX = _volumeX2.default;
exports.Volume = _volume6.default;
exports.Wallet = _wallet2.default;
exports.Wand = _wand2.default;
exports.Watch = _watch2.default;
exports.Webcam = _webcam2.default;
exports.WifiOff = _wifiOff2.default;
exports.Wifi = _wifi2.default;
exports.Wind = _wind2.default;
exports.WrapText = _wrapText2.default;
exports.Wrench = _wrench2.default;
exports.XCircle = _xCircle2.default;
exports.XOctagon = _xOctagon2.default;
exports.XSquare = _xSquare2.default;
exports.X = _x2.default;
exports.Youtube = _youtube2.default;
exports.ZapOff = _zapOff2.default;
exports.Zap = _zap2.default;
exports.ZoomIn = _zoomIn2.default;
exports.ZoomOut = _zoomOut2.default;