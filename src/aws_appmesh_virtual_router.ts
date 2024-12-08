import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppmeshVirtualRouterArgsSpecListenerPortMapping {
  port: number;
  protocol: string;
}

export interface AwsAppmeshVirtualRouterArgsSpecListener {
  port_mapping: AwsAppmeshVirtualRouterArgsSpecListenerPortMapping;
}

export interface AwsAppmeshVirtualRouterArgsSpec {
  listener?: AwsAppmeshVirtualRouterArgsSpecListener[];
}

export interface AwsAppmeshVirtualRouterArgs {
  mesh_name: string;
  name: string;
  tags?: { [key: string]: string };
  spec: AwsAppmeshVirtualRouterArgsSpec;
}

export class aws_appmesh_virtual_router extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppmeshVirtualRouterArgs) {
    const meta = {spec:{isBlock:true,listener:{isBlock:true,port_mapping:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_appmesh_virtual_router", resourceName);
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
