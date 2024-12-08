import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsQuicksightThemeArgs {
  theme_id: string;
}

export class data_aws_quicksight_theme extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsQuicksightThemeArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_quicksight_theme", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get base_theme_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.base_theme_id`;
  }

  get configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.configuration`;
  }

  get created_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_time`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_updated_time`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get permissions(): string {
    return `data.${this.resourceType}.${this.resourceName}.permissions`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get theme_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.theme_id`;
  }

  get version_description(): string {
    return `data.${this.resourceType}.${this.resourceName}.version_description`;
  }

  get version_number(): string {
    return `data.${this.resourceType}.${this.resourceName}.version_number`;
  }
}
