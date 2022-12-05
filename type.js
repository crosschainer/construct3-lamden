"use strict";

{
  const PLUGIN_CLASS = SDK.Plugins.lamden;

  PLUGIN_CLASS.Type = class lamdenPluginType extends SDK.ITypeBase
  {
    constructor(sdkPlugin, iObjectType)
    {
      super(sdkPlugin, iObjectType);
    }
  };
}