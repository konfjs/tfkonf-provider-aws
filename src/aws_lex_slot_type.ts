import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLexSlotTypeArgsEnumerationValue {
  synonyms?: string[];
  value: string;
}

export interface AwsLexSlotTypeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsLexSlotTypeArgs {
  create_version?: boolean;
  description?: string;
  name: string;
  value_selection_strategy?: string;
  enumeration_value: AwsLexSlotTypeArgsEnumerationValue[];
  timeouts?: AwsLexSlotTypeArgsTimeouts;
}

export class aws_lex_slot_type extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLexSlotTypeArgs) {
    const meta = {enumeration_value:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lex_slot_type", resourceName);
  }

  get checksum(): string {
    return `${this.resourceType}.${this.resourceName}.checksum`;
  }

  get created_date(): string {
    return `${this.resourceType}.${this.resourceName}.created_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_date(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated_date`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
