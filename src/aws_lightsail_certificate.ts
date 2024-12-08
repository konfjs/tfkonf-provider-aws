import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailCertificateArgs {
  name: string;
  tags?: { [key: string]: string };
}

export class aws_lightsail_certificate extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLightsailCertificateArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_certificate", resourceName);
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

  get domain_validation_options(): string {
    return `${this.resourceType}.${this.resourceName}.domain_validation_options`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get subject_alternative_names(): string {
    return `${this.resourceType}.${this.resourceName}.subject_alternative_names`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
