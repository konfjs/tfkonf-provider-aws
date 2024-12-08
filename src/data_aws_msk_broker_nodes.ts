import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsMskBrokerNodesArgs {
  cluster_arn: string;
}

export class data_aws_msk_broker_nodes extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsMskBrokerNodesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_msk_broker_nodes", resourceName);
  }

  get cluster_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get node_info_list(): string {
    return `data.${this.resourceType}.${this.resourceName}.node_info_list`;
  }
}
