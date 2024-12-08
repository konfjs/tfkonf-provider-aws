import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailLbCertificateAttachmentArgs {
  certificate_name: string;
  lb_name: string;
}

export class aws_lightsail_lb_certificate_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLightsailLbCertificateAttachmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_lb_certificate_attachment", resourceName);
  }

  get certificate_name(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lb_name(): string {
    return `${this.resourceType}.${this.resourceName}.lb_name`;
  }
}
