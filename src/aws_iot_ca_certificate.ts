import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotCaCertificateArgsRegistrationConfig {
  role_arn?: string;
  template_body?: string;
  template_name?: string;
}

export interface AwsIotCaCertificateArgs {
  active: boolean;
  allow_auto_registration: boolean;
  ca_certificate_pem: string;
  certificate_mode?: string;
  tags?: { [key: string]: string };
  verification_certificate_pem?: string;
  registration_config?: AwsIotCaCertificateArgsRegistrationConfig;
}

export class aws_iot_ca_certificate extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIotCaCertificateArgs) {
    const meta = {registration_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_iot_ca_certificate", resourceName);
  }

  get active(): string {
    return `${this.resourceType}.${this.resourceName}.active`;
  }

  get allow_auto_registration(): string {
    return `${this.resourceType}.${this.resourceName}.allow_auto_registration`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get ca_certificate_pem(): string {
    return `${this.resourceType}.${this.resourceName}.ca_certificate_pem`;
  }

  get customer_version(): string {
    return `${this.resourceType}.${this.resourceName}.customer_version`;
  }

  get generation_id(): string {
    return `${this.resourceType}.${this.resourceName}.generation_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get validity(): string {
    return `${this.resourceType}.${this.resourceName}.validity`;
  }
}
