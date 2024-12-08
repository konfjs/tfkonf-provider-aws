import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLbListenerArgsTimeouts {
  read?: string;
}

export interface DataAwsLbListenerArgs {
  timeouts?: DataAwsLbListenerArgsTimeouts;
}

export class data_aws_lb_listener extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsLbListenerArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_lb_listener", resourceName);
  }

  get alpn_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.alpn_policy`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get certificate_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_arn`;
  }

  get default_action(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_action`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get load_balancer_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.load_balancer_arn`;
  }

  get mutual_authentication(): string {
    return `data.${this.resourceType}.${this.resourceName}.mutual_authentication`;
  }

  get port(): string {
    return `data.${this.resourceType}.${this.resourceName}.port`;
  }

  get protocol(): string {
    return `data.${this.resourceType}.${this.resourceName}.protocol`;
  }

  get ssl_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.ssl_policy`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
