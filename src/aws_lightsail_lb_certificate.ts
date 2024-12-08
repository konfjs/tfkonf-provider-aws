import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailLbCertificateArgs {
  lb_name: string;
  name: string;
}

export class aws_lightsail_lb_certificate extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLightsailLbCertificateArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_lb_certificate", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get domain_validation_records(): string {
    return `${this.resourceType}.${this.resourceName}.domain_validation_records`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lb_name(): string {
    return `${this.resourceType}.${this.resourceName}.lb_name`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get subject_alternative_names(): string {
    return `${this.resourceType}.${this.resourceName}.subject_alternative_names`;
  }

  get support_code(): string {
    return `${this.resourceType}.${this.resourceName}.support_code`;
  }
}
