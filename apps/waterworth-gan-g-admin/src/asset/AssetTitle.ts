import { Asset as TAsset } from "../api/asset/Asset";

export const ASSET_TITLE_FIELD = "assetType";

export const AssetTitle = (record: TAsset): string => {
  return record.assetType?.toString() || String(record.id);
};
