import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsGlueScriptArgsDagEdge {
  source: string;
  target: string;
  target_parameter?: string;
}

export interface DataAwsGlueScriptArgsDagNodeArgs {
  name: string;
  param?: boolean;
  value: string;
}

export interface DataAwsGlueScriptArgsDagNode {
  id: string;
  line_number?: number;
  node_type: string;
  args: DataAwsGlueScriptArgsDagNodeArgs[];
}

export interface DataAwsGlueScriptArgs {
  language?: string;
  dag_edge: DataAwsGlueScriptArgsDagEdge[];
  dag_node: DataAwsGlueScriptArgsDagNode[];
}

export class data_aws_glue_script extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsGlueScriptArgs) {
    const meta = {dag_edge:{isBlock:true},dag_node:{isBlock:true,args:{isBlock:true}}};
    super(terraformConfig, "data", args, meta, "aws_glue_script", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get python_script(): string {
    return `data.${this.resourceType}.${this.resourceName}.python_script`;
  }

  get scala_code(): string {
    return `data.${this.resourceType}.${this.resourceName}.scala_code`;
  }
}
