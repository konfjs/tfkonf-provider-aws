import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueCatalogTableOptimizerArgsConfiguration {
  enabled: boolean;
  role_arn: string;
}

export interface AwsGlueCatalogTableOptimizerArgs {
  catalog_id: string;
  database_name: string;
  table_name: string;
  type: string;
  configuration?: AwsGlueCatalogTableOptimizerArgsConfiguration[];
}

export class aws_glue_catalog_table_optimizer extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGlueCatalogTableOptimizerArgs) {
    const meta = {configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_glue_catalog_table_optimizer", resourceName);
  }

  get catalog_id(): string {
    return `${this.resourceType}.${this.resourceName}.catalog_id`;
  }

  get database_name(): string {
    return `${this.resourceType}.${this.resourceName}.database_name`;
  }

  get table_name(): string {
    return `${this.resourceType}.${this.resourceName}.table_name`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
