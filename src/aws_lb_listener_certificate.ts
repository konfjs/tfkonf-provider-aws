import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLbListenerCertificateArgs {
  certificate_arn: string;
  listener_arn: string;
}

export class aws_lb_listener_certificate extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLbListenerCertificateArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lb_listener_certificate", resourceName);
  }

  get certificate_arn(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get listener_arn(): string {
    return `${this.resourceType}.${this.resourceName}.listener_arn`;
  }
}
