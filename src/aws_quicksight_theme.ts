import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQuicksightThemeArgsConfigurationDataColorPalette {
  colors?: string[];
  empty_fill_color?: string;
  min_max_gradient?: string[];
}

export interface AwsQuicksightThemeArgsConfigurationSheetTileBorder {
  show?: boolean;
}

export interface AwsQuicksightThemeArgsConfigurationSheetTile {
  border?: AwsQuicksightThemeArgsConfigurationSheetTileBorder;
}

export interface AwsQuicksightThemeArgsConfigurationSheetTileLayoutGutter {
  show?: boolean;
}

export interface AwsQuicksightThemeArgsConfigurationSheetTileLayoutMargin {
  show?: boolean;
}

export interface AwsQuicksightThemeArgsConfigurationSheetTileLayout {
  gutter?: AwsQuicksightThemeArgsConfigurationSheetTileLayoutGutter;
  margin?: AwsQuicksightThemeArgsConfigurationSheetTileLayoutMargin;
}

export interface AwsQuicksightThemeArgsConfigurationSheet {
  tile?: AwsQuicksightThemeArgsConfigurationSheetTile;
  tile_layout?: AwsQuicksightThemeArgsConfigurationSheetTileLayout;
}

export interface AwsQuicksightThemeArgsConfigurationTypographyFontFamilies {
  font_family?: string;
}

export interface AwsQuicksightThemeArgsConfigurationTypography {
  font_families?: AwsQuicksightThemeArgsConfigurationTypographyFontFamilies[];
}

export interface AwsQuicksightThemeArgsConfigurationUiColorPalette {
  accent?: string;
  accent_foreground?: string;
  danger?: string;
  danger_foreground?: string;
  dimension?: string;
  dimension_foreground?: string;
  measure?: string;
  measure_foreground?: string;
  primary_background?: string;
  primary_foreground?: string;
  secondary_background?: string;
  secondary_foreground?: string;
  success?: string;
  success_foreground?: string;
  warning?: string;
  warning_foreground?: string;
}

export interface AwsQuicksightThemeArgsConfiguration {
  data_color_palette?: AwsQuicksightThemeArgsConfigurationDataColorPalette;
  sheet?: AwsQuicksightThemeArgsConfigurationSheet;
  typography?: AwsQuicksightThemeArgsConfigurationTypography;
  ui_color_palette?: AwsQuicksightThemeArgsConfigurationUiColorPalette;
}

export interface AwsQuicksightThemeArgsPermissions {
  actions: string[];
  principal: string;
}

export interface AwsQuicksightThemeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsQuicksightThemeArgs {
  base_theme_id: string;
  name: string;
  tags?: { [key: string]: string };
  theme_id: string;
  version_description?: string;
  configuration?: AwsQuicksightThemeArgsConfiguration;
  permissions?: AwsQuicksightThemeArgsPermissions[];
  timeouts?: AwsQuicksightThemeArgsTimeouts;
}

export class aws_quicksight_theme extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsQuicksightThemeArgs) {
    const meta = {configuration:{isBlock:true,data_color_palette:{isBlock:true},sheet:{isBlock:true,tile:{isBlock:true,border:{isBlock:true}},tile_layout:{isBlock:true,gutter:{isBlock:true},margin:{isBlock:true}}},typography:{isBlock:true,font_families:{isBlock:true}},ui_color_palette:{isBlock:true}},permissions:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_quicksight_theme", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get base_theme_id(): string {
    return `${this.resourceType}.${this.resourceName}.base_theme_id`;
  }

  get created_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated_time`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get theme_id(): string {
    return `${this.resourceType}.${this.resourceName}.theme_id`;
  }

  get version_number(): string {
    return `${this.resourceType}.${this.resourceName}.version_number`;
  }
}
