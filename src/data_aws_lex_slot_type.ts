import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLexSlotTypeArgs {
  name: string;
  version?: string;
}

export class data_aws_lex_slot_type extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsLexSlotTypeArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_lex_slot_type", resourceName);
  }

  get checksum(): string {
    return `data.${this.resourceType}.${this.resourceName}.checksum`;
  }

  get created_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_date`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get enumeration_value(): string {
    return `data.${this.resourceType}.${this.resourceName}.enumeration_value`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_updated_date`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get value_selection_strategy(): string {
    return `data.${this.resourceType}.${this.resourceName}.value_selection_strategy`;
  }
}
