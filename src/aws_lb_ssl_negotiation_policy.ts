import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLbSslNegotiationPolicyArgsAttribute {
  name: string;
  value: string;
}

export interface AwsLbSslNegotiationPolicyArgs {
  lb_port: number;
  load_balancer: string;
  name: string;
  triggers?: { [key: string]: string };
  attribute?: AwsLbSslNegotiationPolicyArgsAttribute[];
}

export class aws_lb_ssl_negotiation_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLbSslNegotiationPolicyArgs) {
    const meta = {attribute:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lb_ssl_negotiation_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lb_port(): string {
    return `${this.resourceType}.${this.resourceName}.lb_port`;
  }

  get load_balancer(): string {
    return `${this.resourceType}.${this.resourceName}.load_balancer`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
