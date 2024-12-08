import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafregionalIpsetArgsIpSetDescriptor {
  type: string;
  value: string;
}

export interface AwsWafregionalIpsetArgs {
  name: string;
  ip_set_descriptor?: AwsWafregionalIpsetArgsIpSetDescriptor[];
}

export class aws_wafregional_ipset extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsWafregionalIpsetArgs) {
    const meta = {ip_set_descriptor:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_wafregional_ipset", resourceName);
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
