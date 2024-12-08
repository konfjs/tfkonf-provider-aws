import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2NetworkInsightsPathArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2NetworkInsightsPathArgs {
  filter?: DataAwsEc2NetworkInsightsPathArgsFilter[];
}

export class data_aws_ec2_network_insights_path extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2NetworkInsightsPathArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_network_insights_path", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get destination(): string {
    return `data.${this.resourceType}.${this.resourceName}.destination`;
  }

  get destination_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.destination_arn`;
  }

  get destination_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.destination_ip`;
  }

  get destination_port(): string {
    return `data.${this.resourceType}.${this.resourceName}.destination_port`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get network_insights_path_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_insights_path_id`;
  }

  get protocol(): string {
    return `data.${this.resourceType}.${this.resourceName}.protocol`;
  }

  get source(): string {
    return `data.${this.resourceType}.${this.resourceName}.source`;
  }

  get source_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_arn`;
  }

  get source_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_ip`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
