import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicecatalogappregistryApplicationArgs {
  description?: string;
  name: string;
}

export class aws_servicecatalogappregistry_application extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsServicecatalogappregistryApplicationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_servicecatalogappregistry_application", resourceName);
  }

  get application_tag(): string {
    return `${this.resourceType}.${this.resourceName}.application_tag`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
