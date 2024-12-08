import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatasyncAgentArgsTimeouts {
  create?: string;
}

export interface AwsDatasyncAgentArgs {
  name?: string;
  security_group_arns?: string[];
  subnet_arns?: string[];
  tags?: { [key: string]: string };
  vpc_endpoint_id?: string;
  timeouts?: AwsDatasyncAgentArgsTimeouts;
}

export class aws_datasync_agent extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDatasyncAgentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_datasync_agent", resourceName);
  }

  get activation_key(): string {
    return `${this.resourceType}.${this.resourceName}.activation_key`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.ip_address`;
  }

  get private_link_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.private_link_endpoint`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
