import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsImagebuilderDistributionConfigurationArgs {
  arn: string;
}

export class data_aws_imagebuilder_distribution_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsImagebuilderDistributionConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_imagebuilder_distribution_configuration", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get date_created(): string {
    return `data.${this.resourceType}.${this.resourceName}.date_created`;
  }

  get date_updated(): string {
    return `data.${this.resourceType}.${this.resourceName}.date_updated`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get distribution(): string {
    return `data.${this.resourceType}.${this.resourceName}.distribution`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
