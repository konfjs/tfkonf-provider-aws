import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWorklinkFleetArgsIdentityProvider {
  saml_metadata: string;
  type: string;
}

export interface AwsWorklinkFleetArgsNetwork {
  security_group_ids: string[];
  subnet_ids: string[];
  vpc_id: string;
}

export interface AwsWorklinkFleetArgs {
  audit_stream_arn?: string;
  device_ca_certificate?: string;
  display_name?: string;
  name: string;
  optimize_for_end_user_location?: boolean;
  identity_provider?: AwsWorklinkFleetArgsIdentityProvider;
  network?: AwsWorklinkFleetArgsNetwork;
}

export class aws_worklink_fleet extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsWorklinkFleetArgs) {
    const meta = {identity_provider:{isBlock:true},network:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_worklink_fleet", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get company_code(): string {
    return `${this.resourceType}.${this.resourceName}.company_code`;
  }

  get created_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated_time`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
