import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafIpsetArgsIpSetDescriptors {
  type: string;
  value: string;
}

export interface AwsWafIpsetArgs {
  name: string;
  ip_set_descriptors?: AwsWafIpsetArgsIpSetDescriptors[];
}

export class aws_waf_ipset extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsWafIpsetArgs) {
    const meta = {ip_set_descriptors:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_waf_ipset", resourceName);
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
