import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVerifiedpermissionsSchemaArgsDefinition {
  value: string;
}

export interface AwsVerifiedpermissionsSchemaArgs {
  policy_store_id: string;
  definition?: AwsVerifiedpermissionsSchemaArgsDefinition;
}

export class aws_verifiedpermissions_schema extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVerifiedpermissionsSchemaArgs) {
    const meta = {definition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_verifiedpermissions_schema", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get namespaces(): string {
    return `${this.resourceType}.${this.resourceName}.namespaces`;
  }

  get policy_store_id(): string {
    return `${this.resourceType}.${this.resourceName}.policy_store_id`;
  }
}
