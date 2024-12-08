import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDxConnectionAssociationArgs {
  connection_id: string;
  lag_id: string;
}

export class aws_dx_connection_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDxConnectionAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_dx_connection_association", resourceName);
  }

  get connection_id(): string {
    return `${this.resourceType}.${this.resourceName}.connection_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lag_id(): string {
    return `${this.resourceType}.${this.resourceName}.lag_id`;
  }
}
