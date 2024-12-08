import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsServicecatalogLaunchPathsArgsTimeouts {
  read?: string;
}

export interface DataAwsServicecatalogLaunchPathsArgs {
  accept_language?: string;
  product_id: string;
  timeouts?: DataAwsServicecatalogLaunchPathsArgsTimeouts;
}

export class data_aws_servicecatalog_launch_paths extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsServicecatalogLaunchPathsArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_servicecatalog_launch_paths", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get product_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.product_id`;
  }

  get summaries(): string {
    return `data.${this.resourceType}.${this.resourceName}.summaries`;
  }
}
