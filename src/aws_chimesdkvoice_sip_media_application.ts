import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsChimesdkvoiceSipMediaApplicationArgsEndpoints {
  lambda_arn: string;
}

export interface AwsChimesdkvoiceSipMediaApplicationArgs {
  aws_region: string;
  name: string;
  tags?: { [key: string]: string };
  endpoints: AwsChimesdkvoiceSipMediaApplicationArgsEndpoints;
}

export class aws_chimesdkvoice_sip_media_application extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsChimesdkvoiceSipMediaApplicationArgs) {
    const meta = {endpoints:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_chimesdkvoice_sip_media_application", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_region(): string {
    return `${this.resourceType}.${this.resourceName}.aws_region`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
