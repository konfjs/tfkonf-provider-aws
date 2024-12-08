import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatasyncLocationNfsArgsMountOptions {
  version?: string;
}

export interface AwsDatasyncLocationNfsArgsOnPremConfig {
  agent_arns: string[];
}

export interface AwsDatasyncLocationNfsArgs {
  server_hostname: string;
  subdirectory: string;
  tags?: { [key: string]: string };
  mount_options?: AwsDatasyncLocationNfsArgsMountOptions;
  on_prem_config: AwsDatasyncLocationNfsArgsOnPremConfig;
}

export class aws_datasync_location_nfs extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDatasyncLocationNfsArgs) {
    const meta = {mount_options:{isBlock:true},on_prem_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_datasync_location_nfs", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
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
}
