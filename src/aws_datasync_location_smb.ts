import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatasyncLocationSmbArgsMountOptions {
  version?: string;
}

export interface AwsDatasyncLocationSmbArgs {
  agent_arns: string[];
  password: string;
  server_hostname: string;
  subdirectory: string;
  tags?: { [key: string]: string };
  user: string;
  mount_options?: AwsDatasyncLocationSmbArgsMountOptions;
}

export class aws_datasync_location_smb extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDatasyncLocationSmbArgs) {
    const meta = {mount_options:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_datasync_location_smb", resourceName);
  }

  get agent_arns(): string {
    return `${this.resourceType}.${this.resourceName}.agent_arns`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get domain(): string {
    return `${this.resourceType}.${this.resourceName}.domain`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get password(): string {
    return `${this.resourceType}.${this.resourceName}.password`;
  }

  get server_hostname(): string {
    return `${this.resourceType}.${this.resourceName}.server_hostname`;
  }

  get subdirectory(): string {
    return `${this.resourceType}.${this.resourceName}.subdirectory`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get uri(): string {
    return `${this.resourceType}.${this.resourceName}.uri`;
  }

  get user(): string {
    return `${this.resourceType}.${this.resourceName}.user`;
  }
}
