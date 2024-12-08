import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEvidentlyFeatureArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEvidentlyFeatureArgsVariationsValue {
  bool_value?: string;
  double_value?: string;
  long_value?: string;
  string_value?: string;
}

export interface AwsEvidentlyFeatureArgsVariations {
  name: string;
  value: AwsEvidentlyFeatureArgsVariationsValue;
}

export interface AwsEvidentlyFeatureArgs {
  description?: string;
  entity_overrides?: { [key: string]: string };
  name: string;
  project: string;
  tags?: { [key: string]: string };
  timeouts?: AwsEvidentlyFeatureArgsTimeouts;
  variations: AwsEvidentlyFeatureArgsVariations[];
}

export class aws_evidently_feature extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEvidentlyFeatureArgs) {
    const meta = {timeouts:{isBlock:true},variations:{isBlock:true,value:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_evidently_feature", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_time`;
  }

  get default_variation(): string {
    return `${this.resourceType}.${this.resourceName}.default_variation`;
  }

  get evaluation_rules(): string {
    return `${this.resourceType}.${this.resourceName}.evaluation_rules`;
  }

  get evaluation_strategy(): string {
    return `${this.resourceType}.${this.resourceName}.evaluation_strategy`;
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get value_type(): string {
    return `${this.resourceType}.${this.resourceName}.value_type`;
  }
}
