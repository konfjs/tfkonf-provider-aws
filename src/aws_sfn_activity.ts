import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSfnActivityArgsEncryptionConfiguration {
  kms_data_key_reuse_period_seconds?: number;
  kms_key_id?: string;
  type?: string;
}

export interface AwsSfnActivityArgs {
  name: string;
  tags?: { [key: string]: string };
  encryption_configuration?: AwsSfnActivityArgsEncryptionConfiguration;
}

export class aws_sfn_activity extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSfnActivityArgs) {
    const meta = {encryption_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sfn_activity", resourceName);
  }

  get creation_date(): string {
    return `${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
