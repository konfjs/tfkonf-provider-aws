import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSfnAliasArgsRoutingConfiguration {
  state_machine_version_arn: string;
  weight: number;
}

export interface AwsSfnAliasArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsSfnAliasArgs {
  description?: string;
  name: string;
  routing_configuration: AwsSfnAliasArgsRoutingConfiguration[];
  timeouts?: AwsSfnAliasArgsTimeouts;
}

export class aws_sfn_alias extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSfnAliasArgs) {
    const meta = {routing_configuration:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sfn_alias", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_date(): string {
    return `${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
