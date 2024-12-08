import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppmeshVirtualServiceArgsSpecProviderVirtualNode {
  virtual_node_name: string;
}

export interface AwsAppmeshVirtualServiceArgsSpecProviderVirtualRouter {
  virtual_router_name: string;
}

export interface AwsAppmeshVirtualServiceArgsSpecProvider {
  virtual_node?: AwsAppmeshVirtualServiceArgsSpecProviderVirtualNode;
  virtual_router?: AwsAppmeshVirtualServiceArgsSpecProviderVirtualRouter;
}

export interface AwsAppmeshVirtualServiceArgsSpec {
  provider?: AwsAppmeshVirtualServiceArgsSpecProvider;
}

export interface AwsAppmeshVirtualServiceArgs {
  mesh_name: string;
  name: string;
  tags?: { [key: string]: string };
  spec: AwsAppmeshVirtualServiceArgsSpec;
}

export class aws_appmesh_virtual_service extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppmeshVirtualServiceArgs) {
    const meta = {spec:{isBlock:true,provider:{isBlock:true,virtual_node:{isBlock:true},virtual_router:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_appmesh_virtual_service", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_date(): string {
    return `${this.resourceType}.${this.resourceName}.created_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_date(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated_date`;
  }

  get mesh_name(): string {
    return `${this.resourceType}.${this.resourceName}.mesh_name`;
  }

  get mesh_owner(): string {
    return `${this.resourceType}.${this.resourceName}.mesh_owner`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get resource_owner(): string {
    return `${this.resourceType}.${this.resourceName}.resource_owner`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
