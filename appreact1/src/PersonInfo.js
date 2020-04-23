class PersonInfo {
    constructor() {
      this.body = {
        _uid: 0,
        _stars: 0,
        _name: '',
        _vid: false,
        _aid: false,
        _fVid: false,
        _fAid: false,
        _ready: false,
      };
    }
  
    init(info) {
      this.body = {...this.body, ...info}
    }
  
    get uid() {
      return this.body._uid;
    }
  
    set uid(uid) {
      this.body._uid = uid;
    }
  
    get stars() {
      return this._stars;
    }
  
    set stars(num) {
      this.body._stars = num;
    }
  
    get name() {
      return this._uid;
    }
  
    set name(nick) {
      this.body._name = nick;
    }
  
    get vid() {
      return this._vid;
    }
  
    set vid(vid) {
      this.body._vid = vid;
    }
  
    get aid() {
      return this._aid;
    }
  
    set aid(aid) {
      this.body._aid = aid;
    }
  
    get fVid() {
      return this._fVid;
    }
  
    set fVid(f) {
      this.body._fVid = f;
    }
  
    get fAid() {
      return this._fAid;
    }
  
    set fAid(f) {
      this.body._fAid = f;
    }
  
    get ready() {
      return this._ready;
    }
  
    set ready(r) {
      return (this.body._ready = r);
    }
  }
  export default PersonInfo;
  