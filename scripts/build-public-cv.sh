#!/usr/bin/env bash
set -euo pipefail

public_cv_script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
public_cv_repo_dir="$(cd -- "$public_cv_script_dir/.." && pwd)"
public_cv_resume_dir="$public_cv_repo_dir/Resume"
public_cv_source="$public_cv_resume_dir/public.tex"
public_cv_pdf="$public_cv_resume_dir/public.pdf"
public_cv_destination="$public_cv_repo_dir/assets/files/CV.pdf"

if [[ ! -f "$public_cv_source" ]]; then
  echo "Missing $public_cv_source" >&2
  exit 1
fi

(
  cd "$public_cv_resume_dir"
  latexmk -pdf -interaction=nonstopmode -halt-on-error public.tex
)

install -m 0644 "$public_cv_pdf" "$public_cv_destination"
echo "Updated $public_cv_destination"
