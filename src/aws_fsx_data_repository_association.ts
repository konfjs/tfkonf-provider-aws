import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFsxDataRepositoryAssociationArgsS3AutoExportPolicy {
}

export interface AwsFsxDataRepositoryAssociationArgsS3AutoImportPolicy {
}

export interface AwsFsxDataRepositoryAssociationArgsS3 {
  auto_export_policy?: AwsFsxDataRepositoryAssociationArgsS3AutoExportPolicy;
  auto_import_policy?: AwsFsxDataRepositoryAssociationArgsS3AutoImportPolicy;
}

export interface AwsFsxDataRepositoryAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFsxDataRepositoryAssociationArgs {
  batch_import_meta_data_on_create?: boolean;
  data_repository_path: string;
  delete_data_in_filesystem?: boolean;
  file_system_id: string;
  file_system_path: string;
  tags?: { [key: string]: string };
  s3?: AwsFsxDataRepositoryAssociationArgsS3;
  timeouts?: AwsFsxDataRepositoryAssociationArgsTimeouts;
}

export class aws_fsx_data_repository_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsFsxDataRepositoryAssociationArgs) {
    const meta = {s3:{isBlock:true,auto_export_policy:{isBlock:true},auto_import_policy:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_fsx_data_repository_association", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get association_id(): string {
    return `${this.resourceType}.${this.resourceName}.association_id`;
  }

  get data_repository_path(): string {
    return `${this.resourceType}.${this.resourceName}.data_repository_path`;
  }

  get file_system_id(): string {
    return `${this.resourceType}.${this.resourceName}.file_system_id`;
  }

  get file_system_path(): string {
    return `${this.resourceType}.${this.resourceName}.file_system_path`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get imported_file_chunk_size(): string {
    return `${this.resourceType}.${this.resourceName}.imported_file_chunk_size`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
