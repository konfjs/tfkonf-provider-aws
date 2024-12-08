import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsImagebuilderDistributionConfigurationsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsImagebuilderDistributionConfigurationsArgs {
  filter?: DataAwsImagebuilderDistributionConfigurationsArgsFilter[];
}

export class data_aws_imagebuilder_distribution_configurations extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsImagebuilderDistributionConfigurationsArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_imagebuilder_distribution_configurations", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get names(): string {
    return `data.${this.resourceType}.${this.resourceName}.names`;
  }
}
