import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDmsCertificateArgs {
  certificate_id: string;
}

export class data_aws_dms_certificate extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsDmsCertificateArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_dms_certificate", resourceName);
  }

  get certificate_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_arn`;
  }

  get certificate_creation_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_creation_date`;
  }

  get certificate_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_id`;
  }

  get certificate_owner(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_owner`;
  }

  get certificate_pem(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_pem`;
  }

  get certificate_wallet(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_wallet`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get key_length(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_length`;
  }

  get signing_algorithm(): string {
    return `data.${this.resourceType}.${this.resourceName}.signing_algorithm`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get valid_from_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.valid_from_date`;
  }

  get valid_to_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.valid_to_date`;
  }
}
