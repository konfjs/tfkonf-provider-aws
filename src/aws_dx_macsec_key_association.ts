import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDxMacsecKeyAssociationArgs {
  cak?: string;
  connection_id: string;
}

export class aws_dx_macsec_key_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDxMacsecKeyAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_dx_macsec_key_association", resourceName);
  }

  get ckn(): string {
    return `${this.resourceType}.${this.resourceName}.ckn`;
  }

  get connection_id(): string {
    return `${this.resourceType}.${this.resourceName}.connection_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get secret_arn(): string {
    return `${this.resourceType}.${this.resourceName}.secret_arn`;
  }

  get start_on(): string {
    return `${this.resourceType}.${this.resourceName}.start_on`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }
}
