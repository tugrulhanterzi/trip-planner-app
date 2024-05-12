class BottomModalManager {
  _currentRef = null;

  register(_instance: any) {
    if (!this._currentRef) {
      this._currentRef = _instance;
    }
  }

  unregister(_instance: any) {
    if (!!this._currentRef && (this._currentRef as any)?._id === _instance._id) {
      this._currentRef = null;
    }
  }

  getCurrent() {
    return this._currentRef;
  }
}

export default new BottomModalManager();
