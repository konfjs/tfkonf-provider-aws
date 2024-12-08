import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDxConnectionConfirmationArgs {
  connection_id: string;
}

export class aws_dx_connection_confirmation extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDxConnectionConfirmationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_dx_connection_confirmation", resourceName);
  }

  get connection_id(): string {
    return `${this.resourceType}.${this.resourceName}.connection_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
