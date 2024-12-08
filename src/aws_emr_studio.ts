import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEmrStudioArgs {
  auth_mode: string;
  default_s3_location: string;
  description?: string;
  engine_security_group_id: string;
  idp_auth_url?: string;
  idp_relay_state_parameter_name?: string;
  name: string;
  service_role: string;
  subnet_ids: string[];
  tags?: { [key: string]: string };
  user_role?: string;
  vpc_id: string;
  workspace_security_group_id: string;
}

export class aws_emr_studio extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEmrStudioArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_emr_studio", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get auth_mode(): string {
    return `${this.resourceType}.${this.resourceName}.auth_mode`;
  }

  get default_s3_location(): string {
    return `${this.resourceType}.${this.resourceName}.default_s3_location`;
  }

  get engine_security_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.engine_security_group_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get service_role(): string {
    return `${this.resourceType}.${this.resourceName}.service_role`;
  }

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get url(): string {
    return `${this.resourceType}.${this.resourceName}.url`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }

  get workspace_security_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.workspace_security_group_id`;
  }
}
