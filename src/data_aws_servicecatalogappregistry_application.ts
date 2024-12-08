import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsServicecatalogappregistryApplicationArgs {
  id: string;
}

export class data_aws_servicecatalogappregistry_application extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsServicecatalogappregistryApplicationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_servicecatalogappregistry_application", resourceName);
  }

  get application_tag(): string {
    return `data.${this.resourceType}.${this.resourceName}.application_tag`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
