import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudfrontkeyvaluestoreKeyArgs {
  key: string;
  key_value_store_arn: string;
  value: string;
}

export class aws_cloudfrontkeyvaluestore_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudfrontkeyvaluestoreKeyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudfrontkeyvaluestore_key", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key(): string {
    return `${this.resourceType}.${this.resourceName}.key`;
  }

  get key_value_store_arn(): string {
    return `${this.resourceType}.${this.resourceName}.key_value_store_arn`;
  }

  get total_size_in_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.total_size_in_bytes`;
  }

  get value(): string {
    return `${this.resourceType}.${this.resourceName}.value`;
  }
}
