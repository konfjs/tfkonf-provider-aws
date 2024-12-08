import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOrganizationsDelegatedAdministratorArgs {
  account_id: string;
  service_principal: string;
}

export class aws_organizations_delegated_administrator extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsOrganizationsDelegatedAdministratorArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_organizations_delegated_administrator", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get delegation_enabled_date(): string {
    return `${this.resourceType}.${this.resourceName}.delegation_enabled_date`;
  }

  get email(): string {
    return `${this.resourceType}.${this.resourceName}.email`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get joined_method(): string {
    return `${this.resourceType}.${this.resourceName}.joined_method`;
  }

  get joined_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.joined_timestamp`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get service_principal(): string {
    return `${this.resourceType}.${this.resourceName}.service_principal`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
