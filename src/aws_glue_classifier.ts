import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueClassifierArgsCsvClassifier {
  allow_single_column?: boolean;
  contains_header?: string;
  custom_datatype_configured?: boolean;
  custom_datatypes?: string[];
  delimiter?: string;
  disable_value_trimming?: boolean;
  header?: string[];
  quote_symbol?: string;
}

export interface AwsGlueClassifierArgsGrokClassifier {
  classification: string;
  custom_patterns?: string;
  grok_pattern: string;
}

export interface AwsGlueClassifierArgsJsonClassifier {
  json_path: string;
}

export interface AwsGlueClassifierArgsXmlClassifier {
  classification: string;
  row_tag: string;
}

export interface AwsGlueClassifierArgs {
  name: string;
  csv_classifier?: AwsGlueClassifierArgsCsvClassifier;
  grok_classifier?: AwsGlueClassifierArgsGrokClassifier;
  json_classifier?: AwsGlueClassifierArgsJsonClassifier;
  xml_classifier?: AwsGlueClassifierArgsXmlClassifier;
}

export class aws_glue_classifier extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGlueClassifierArgs) {
    const meta = {csv_classifier:{isBlock:true},grok_classifier:{isBlock:true},json_classifier:{isBlock:true},xml_classifier:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_glue_classifier", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
